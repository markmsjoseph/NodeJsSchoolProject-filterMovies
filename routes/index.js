var mongoose = require('mongoose');
var Movies = mongoose.model('Movies');

var express = require('express');
var router = express.Router();

//redirect to the movies page
router.get('/', function(req, res){
	res.redirect(301,'/movies') ;
});

router.get('/movies', function(req, res) {
  //find takes a specific criteria or if you leave it empty it
  //just returns all movies
  Movies.find(function(err, movies, count) {
    console.log(movies);
		var newArr = [];
		for(var i=0; i<movies.length; i++){
			if(movies[i].director == req.query.directorName){
				newArr.push(movies[i]);
			}
		}
		var filteredArray = newArr;
    res.render( 'index', { movies: movies, 'filteredArray':newArr });
  });
});

// router.post('/movies', function(req, res) {
//   Movies.find(function(err, movies, count) {
//     console.log("the movies you want are " + req.body.directorName);
//     var newArr = [];
//     for(var i=0; i<movies.length; i++){
//       if(movies[i].director.toLowerCase() == req.body.directorName.toLowerCase()){
//         newArr.push(movies[i]);
//       }
//     }
//     res.render( 'index', {'filteredArray':newArr});
//   });
// });

//takes the database collection and searches for the director's
//name that was requested. returns a new array with the filtered names
// function filtering(movies){
// 	var newArr = [];
// 	for(var i=0; i<movies.length; i++){
// 		if(movies[i].director.toLowerCase() == req.query.directorName.toLowerCase()){
// 			newArr.push(movies[i]);
// 		}
// 	}
// 	return newArr;
// }


module.exports = router;
