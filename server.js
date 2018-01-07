//  OpenShift sample Node application
var express = require('express'),
    app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


var db = require('./db');
var pageCountMessage = null;
//
var UserController = require('./user/UserController');
app.use('/users', UserController);

var ProductController = require('./product/ProductController');
app.use('/products', ProductController);

app.get('/', function(req, res) {
    // try to initialize the db on every request if it's not already
    // initialized.
    res.render('index.html', { pageCountMessage: null });
});

// error handling
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something bad happened!');
});


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;