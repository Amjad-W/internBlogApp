var express = require('express');
const app = require('../app');
var router = express.Router();
var database = require('../bin/database');
database.initializeMongo();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
