//add code to read and set any environment variables with the dotenv package
require("dotenv").config();


//core node package for reading/writing files
//require modules at top of page
//define fs before using it 
//to include a module must use require
var fs = require('fs');



//require keys by storing in separate variables
//add code required to import the keys.js file-store in variable?
//you should be able to access your keys information  
// include ./keys.js in liri.js to run program instructions
var keys = require('./keys.js');


//twitter variable- twitter documentattion
var Twitter = require('twitter');
//twiter npm  documentation


//spotify variable-spotify documentation
//var spotify = newSpotify(keys.spotify);
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);


//Store the textfile file name given to us from the command line
//use argv 2 & 3 bc the first argument is the location
//class exercise
//0node/1file/2operator/3val/4val
var action = process.argv[2];
var value = process.argv[3];


//switch-case will direct which function gets run
//class exercise

switch (action) {
    case "my-tweets":
        displayTweets();
        break;
    case "spotify-this-song":
        displaySong();
        break;
    case "movie-this":
        displayMovie();
        break;
    case "do-what-it-says":
        displayDoWhat();
        break;

    default:
        return;

}



//TWITTER
//create function to displayTweets
//show 20 tweets
//documentation from twitter npm

function displayTweets() {
    var client = new Twitter(keys.twitter);
    console.log("Let's see some tweets");


    var params = { screen_name: 'goop', count: 20 };


    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
            console.log(response);

            //loop through 20 tweets? then do what? 
            for (i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        }
    })
};


//add new tweets? syntax from W3
// fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
//if (err) throw err;
//console.log('Saved!');
//});



//SPOTIFY
//creat function to displaySong - displaySong defined in switch cases 
//three useful methods -lookup, search, get
//reference from spotify npm documentation
function displaySong() {
    //command line arguments
    //use action vs. process.argv[3]

    //empty string to hold the song data
    //var data = "";

    spotify.search({
        type: 'track',
        query: value,
    }, function(err, data) {
        if (err) throw err;
        //throw err; quickly exits code 
        var data = data.tracks.items[0];
        console.log(data)
            // for (var i = 0; i < data.length; i++) {

        //     //return stop the function from running further
        //     //for loop access spotify data? 
        //     //api documentation data.tracks.items?
        //     // var data = [];

        //name string documentation
        //artist's name
        // space btw text and data
        console.log("Artist: " + data.artists[0].name);
        //song's name
        console.log("Song: " + data.name);
        //preview link from spotify? Url
        console.log("URL preview: " + data.preview_url);
        //the alblum's name
        console.log("album: " + data.album.Album);
        //work on bonus to append to file?
        console.log('Error occurred: ' + err);
        //return;
        // }
    })

};


//OMDB 
function displayMovie() {
    //console.log("this movie")
    //console.log("is this working");
    //request package run intall request in file before continuing
    var request = require("request");
    //variable to store url 
    var movie = process.argv[3];
    // use value vs. process.argv?
    data = movie
    request("http://www.omdbapi.com/?t=" + data + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
        // This line is just to help us debug against the actual URL.
        console.log(body);
        //include request npm package-done
        //class exercise


        // if the request is successful then return 200
        // 200 is the status code and means all is ok
        if (!error && response.statusCode === 200) {
            //use JSON.parse to data returned from the body
            //title
            console.log("Title: " + JSON.parse(body).Title);
            //year the movie came out
            console.log("Release Year: " + JSON.parse(body).Year);
            //IMDB rating of the movie
            console.log("IMDB: " + JSON.parse(body).imdbRating);
            //rotten tomatoes rating of the movie
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            //language of movie
            console.log("Movie Language: " + JSON.parse(body).Language);
            //plot of movie
            console.log("Movie Plot: " + JSON.parse(body).Plot);
            //actors in movie
            console.log("Movie Actors: " + JSON.parse(body).Actors);
            //country where movie was produced
            console.log("Country Origin: " + JSON.parse(body).Country);
        } else {
            //default for no answer = Mr. Nobody
            //request('http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&tomatoes=true&r=json')
            console.log("If you haven't watched Mr. Nobody, then you should!")
            console.log("It's on Netflix!")
        }
        //data.split(",")
    });
}