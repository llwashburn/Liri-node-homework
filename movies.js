//add code to read and set any environment variables with the dotenv package
require("dotenv").config();

//include the request npm package - run "npm intall request"in this folder before proceeding-done
//require keys by storing in separate variables
var request = require("request");
var keys = require('request');

//add code required to import the keys.js file-store in variable?
//you should be able to access your keys information  
// include ./keys.js in liri.js to run program instructions
var keys = require('./keys.js');

//core node package for reading/writing files
//require modules at top of page
var fs = require('fs');

require(request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {
    if (!error && response.statusCode === 200) {

        console.log("This movie's rating is: " + JSON.parse(body).imdbRating);
    }
}));

// //OMDB 
// //console.log("is this working");
// //request package run intall request in file before continuing
// var request = require("request");
// //use variable to store url 
// request("http://www.omdbapi.com/?t=" + data + "&y=&plot=short&apikey=trilogy");


// // This line is just to help us debug against the actual URL.
// console.log(request);

// //include request npm package-done
// //class exercise
// //value stored in array above var value = process.argv[3];
// //create empty varialbe for holding data- am i looping through data or value? 
// var data = data.tracks.items[0];
// var data = [] //empty array

// //loop through all the spotify data in the node argument
// //api documentation data.tracks.items?
// for (var i = 3; i < data.length; i++) {
//     var data = data.tracks.items[0];
// }

// request(queryUrl, function(error, response, body) {
//     // If the request is successful-200 is the status code and means all is ok
//     if (!error && response.statusCode === 200) {

//         //title
//         console.log("Title: " + JSON.parse(body).Title);
//         //year the movie came out
//         console.log("Release Year: " + JSON.parse(body).year);
//         //IMDB rating of the movie
//         console.log("IMDB Rating" + JSON.parse(body).imdbRating);
//         //rotten tomatoes rating of the movie
//         console.log("Rotten Tomatoes Rating" + JSON.parse(body).tomatoRating);
//         //language of movie
//         console.log("Movie Language" + JSON.parse(body).Language);
//         //plot of movie
//         console.log("Movie Plot" + JSON.parse(body).Plot);
//         //actors in movie
//         console.log("Movie Actors" + JSON.parse(body).Actors);
//         //country where movie was produced
//         console.log("Country Origin" + JSON.parse(body).Country);
//     }

//     //data.split(",")
// });