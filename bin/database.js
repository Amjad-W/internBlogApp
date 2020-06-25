const mongoose = require('mongoose');
const DATABASE = 'mongodb://mongo/test';
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    content: String,
    user: String,
    createdAt: {type: String, default: Date.now}
});

var userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  user: {
    type: String,
    required: true,
    trim: true,
  },
  pass: {
    type: String,
    required: true
  }
});

User = exports.User = mongoose.model('User',userSchema);
Blog = exports.Blog = mongoose.model('Blog',blogSchema);

exports.initializeMongo = function() {
    mongoose.connect(DATABASE);
    console.log('Connecting to ' + DATABASE);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console,'Connection error: ;-;'));
    db.once('open', function(){
        console.log("DB Connected");
    });
}

exports.addBlog = async function(newTitle,newContent,postedBy){
    var newBlog = new Blog({
        title: newTitle,
        content: newContent,
        user: postedBy
    });
    await newBlog.save(function(err){
        if (err) return console.error(err);
        console.log('Saved ' + newBlog.title);
    })
}