var app = require('./app');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
//
var server = app.listen(port, ip, function() {
    console.log('Express server listening on port ' + port);
});




//app.listen(port, ip);
//console.log('Server running on http://%s:%s', ip, port);