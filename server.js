//  OpenShift sample Node application
var express = require('express');
var app     = express();
var cors    = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var db = require('./db');
var pageCountMessage = null;
//
var UserController = require('./user/UserController');
app.use('/users', UserController);

var ProductController = require('./product/ProductController');
app.use('/products', ProductController);

var ListController = require('./cc/ListController');
app.use('/cc', ListController);

app.get('/', function(req, res) {
    // try to initialize the db on every request if it's not already
    // initialized.
    res.render('index.html', { pageCountMessage: null });
});

// error handling
app.use(function(err, req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, ip, function() {
    console.log('Server running on http://%s:%s', ip, port);
});

module.exports = app;