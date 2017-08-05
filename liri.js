//core node package for reading and writing files
var fs = require("fs");
var twitter = require("twitter");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var request = require("request");

//testing keys
//console.log(keys);
//working

//storing keys as variable in liri js

var TKeys = keys.twitterKeys;

//console.log(keys.twitterKeys);

//read from the random.txt file
/*fs.readFile("keys.js", "utf8", function(error, data) {
	//error
	if (error) {
		return console.log(error);
	}
	//print contents of data
	console.log(data);
	//working

});*/

//twitter is stumping me. moving on to omdb

//store all arguments into an array

var argArr = process.argv;

//epmty variable for storing commands
var command = "";

//loop through all words in a command

for (var i = 2; i < argArr.length; i++) {

	if (i > 2 && i < argArr.length) {

		command = command + "+" + argArr[i];
	}

	else {

		command += argArr[i];
	}
	
}




var queryUrl = "http://www.omdbapi.com/?t=" + command + "&y=&plot=short&apikey=40e9cece";

// This line is just to help us debug against the actual URL.


request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("---------------------");
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Rating: " + JSON.parse(body).Rated);
    console.log("Rotten Tomatoes: " + JSON.parse(body).tomatoUserRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("---------------------");
  }
})

