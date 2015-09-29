var express = require('express');
var router = express.Router();

var React = require('react'),
    Router = require('react-router').Router,
    routes = require('../public/javascripts/routes');

router.get('/', function(req, res) {
  var markup = React.renderToString(App());

  Router.run(routes, req.url, function(handler) {
    var content = React.renderToString(<handler />);
    res.render('index', {
      title: 'Ian Webster',
      markup: content,
    });
  });
});

module.exports = router;
