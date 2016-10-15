import express = require('express');
import path = require('path');

var app = express();
var port: number = process.env.PORT || 3000;

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // Pass to next layer of middleware
    next();
});

// Setting the context root for client code
app.use('/', express.static(__dirname + '/'));

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});