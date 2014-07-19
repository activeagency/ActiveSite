/**
 * Created by mattludwigs on 7/18/14.
 */

var express = require('express'),
    ejs = require('ejs'),
    port,
    app,
    site = require('./data/siteData.js');

// init app
app = express();
port = process.env.PORT || 9778

// App Set Up
app.set('views', './views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));


app.get('/info', function(req, res) {
  res.render('dev', {
    site: site
  });
});

app.get('/', function(req, res) {
  res.render('index', {
   site: site
//   nav: nav
  });
});

port = process.env.PORT || 9778;
app.listen(port);

console.log('Listening on port: ' + port);
