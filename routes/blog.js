var express = require('express');
const app = require('../app');
var router = express.Router();
var database = require('../bin/database');
database.initializeMongo();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  database.Blog.findById(req.params.id, function(err,blogData){
  res.render('post', { title: blogData.title, blogData: blogData });
  });
});

module.exports = router;
