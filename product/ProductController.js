var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var Product = require('./Product');

// CREATES A NEW Product
router.post('/', function(req, res) {
    Product.create({
            name:   req.body.name,
            price:  req.body.price,
            amount: req.body.amount
        },
        function(err, product) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(product);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function(req, res) {
    Product.find({}, function(err, products) {
        if (err) return res.status(500).send("There was a problem finding the products.");
        res.status(200).send(products);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) return res.status(500).send("There was a problem finding the product.");
        if (!product) return res.status(404).send("No product found.");
        res.status(200).send(product);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err, product) {
        if (err) return res.status(500).send("There was a problem deleting the product.");
        res.status(200).send("Product: " + product.name + " was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, product) {
        if (err) return res.status(500).send("There was a problem updating the product.");
        res.status(200).send(product);
    });
});


module.exports = router;