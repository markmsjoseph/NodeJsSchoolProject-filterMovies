// as always, require the module
var mongoose = require('mongoose');

// define the data in our collection
var Movies = new mongoose.Schema({ title: String,  year:Number, director: String});

// "register" it so that mongoose knows about it
mongoose.model('Movies', Movies);
mongoose.connect('mongodb://localhost/hw05');
