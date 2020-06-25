var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var cookie = req.cookies.login;
  if (cookie != undefined)
    res.render("about", {
      title: "About Me",
      userData: JSON.parse(cookie),
    });
  res.render('about', { title: 'About Me' });
});

module.exports = router;
