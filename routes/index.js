var express = require("express");
const app = require("../app");
var router = express.Router();
var database = require("../bin/database");
database.initializeMongo();

/* GET home page. */
router.get("/", function (req, res, next) {
  database.Blog.find({}, function (err, blogs) {
    var cookie = req.cookies.login;
    if (cookie != undefined)
      res.render("index", {
        title: "My Blog",
        userData: JSON.parse(cookie),
        blogs: blogs
      });
    else res.render("index", { title: "My Blog", blogs: blogs });
  });
});

router.post("/", async function (req, res, next) {
  database.User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return console.error(err);
    if (user) {
      if (user.pass == req.body.pass) {
        res.cookie(
          "login",
          JSON.stringify({
            user: user.user,
            email: user.email,
          })
        );
        res.redirect("/");
      }
    }
  });
});

module.exports = router;
