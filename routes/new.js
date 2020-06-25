var express = require('express');
const app = require('../app');
var router = express.Router();
var database = require('../bin/database');
database.initializeMongo();

/* GET home page. */
router.get('/', function(req, res, next) {
  var cookie = req.cookies.login;
  if (cookie != undefined)
    res.render("new", {
      title: "Create new blog",
      userData: JSON.parse(cookie),
    });
    else
    res.send("Unauthorized!");
});

router.post('/',function(req,res,next){
  database.addBlog(req.body.title,req.body.content,req.cookies.login.user)
  .then(() =>{
    console.log('Added blog entry:)');
    console.log(req.body);
    res.redirect('/');
  });
});
module.exports = router;
