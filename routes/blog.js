var express = require('express');
const app = require('../app');
var router = express.Router();
var database = require('../bin/database');
database.initializeMongo();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'Express' });
});

router.get('/testBlog', function(req,res){
  database.Blog.find(function(err,blog){
    if(err) return res.error(err);
    console.log(blog);
    res.json(blog);
  });
})

module.exports = router;
