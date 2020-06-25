var express = require("express");
const app = require("../app");
var router = express.Router();

router.post("/", function(req,res,next){
  res.clearCookie("login");
  res.redirect("/");
});

module.exports = router;
