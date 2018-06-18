
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var http = require('http');
var path = require("path");

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
//require the dbs
require('./db');
//require the model that was registerd with mongoose
var mongoose = require('mongoose');
var Movie = mongoose.model('Movies');
var routes = require('./routes/index');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: false}));
app.engine('handlebars', handlebars.engine);
app.use('/', routes);
app.set('view engine', 'handlebars');

module.exports = app;
app.listen(3000);
