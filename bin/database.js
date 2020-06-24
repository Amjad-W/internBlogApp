const mongoose = require('mongoose');
const DATABASE = 'mongodb://mongo/test';
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    content: String,
    createdAt: {type: String, default: Date.now}
});

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

var addBlog = function(){
    var test = new Blog({
        title: 'Andari',
        content: 'xdxdxdxd'
    });
    test.save(function(err){
        if (err) return console.error(err);
        console.log('Saved ' + test.title);
    })
}