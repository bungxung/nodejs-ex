var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var User = require('./List');

// CREATES A NEW LIST
router.post('/', function (req, res) {
    List.create({
            name : req.body.name,
            adresse : req.body.adresse,
            telefon : req.body.telefon,
            website : req.body.website  
        }, 
        function (err, list) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(list);
        });
});

// RETURNS ALL THE LISTS IN THE DATABASE
router.get('/', function (req, res) {
    List.find({}, function (err, lists) {
        if (err) return res.status(500).send("There was a problem finding the lists.");
        res.status(200).send(lists);
    });
});

// GETS A SINGLE LIST FROM THE DATABASE
router.get('/:id', function (req, res) {
    List.findById(req.params.id, function (err, list) {
        if (err) return res.status(500).send("There was a problem finding the list.");
        if (!list) return res.status(404).send("No list found.");
        res.status(200).send(list);
    });
});

// DELETES A LIST FROM THE DATABASE
router.delete('/:id', function (req, res) {
    List.findByIdAndRemove(req.params.id, function (err, list) {
        if (err) return res.status(500).send("There was a problem deleting the list.");
        res.status(200).send("List: "+ list.name +" was deleted.");
    });
});

// UPDATES A SINGLE LIST IN THE DATABASE
router.put('/:id', function (req, res) {
    List.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, list) {
        if (err) return res.status(500).send("There was a problem updating the list.");
        res.status(200).send(list);
    });
});


module.exports = router;