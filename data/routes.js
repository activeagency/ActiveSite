var site = require('./siteData.js');

module.exports = function (app) {

  app.get('/info', function(req, res) {
    res.render('dev', {
      site: site
    });
  });

  app.get('/', function(req, res) {
    res.render('index', {
      site: site
    });
  });
};