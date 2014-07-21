'use strict';  

var express = require('express'),
    ejs = require('ejs'),
    port,
    app,
    routes = require('../data/routes.js');  

// set app
app = express();
port = process.env.PORT || 9778

// App Set Up
app.set('views', './views');
app.engine('html', require('ejs').renderFile);

// Set view engine
app.set('view engine', 'html');

// Set Static files
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/images", express.static(__dirname + "/images"));

// init routes
routes(app);

port = process.env.PORT || 9778;
app.listen(port);

console.log('Listening on port: ' + port);

// export for server tests
module.exports = app;