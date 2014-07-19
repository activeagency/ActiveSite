/**
 * Created by mattludwigs on 7/18/14.
 */

var express = require('express'),
    ejs = require('ejs'),
    port,
    app;

// init app
app = express();
port = process.env.PORT || 9778

// App Set Up
app.set('views', './views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

var site = {
  title: "Active",
  heading: "Future site for Active Angency",
  env: "dev",
  page: true
}

app.get('/', function(req, res) {
  res.render('dev', {
    site: site
  });
});

port = process.env.PORT || 9778;
app.listen(port);

console.log('Listening on port: ' + port);
