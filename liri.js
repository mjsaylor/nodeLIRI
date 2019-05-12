// read and set any environment variables with the dotenv package
require("dotenv").config();
// import the keys.js file and store it in a variable
const keys = require("./keys.js");
// access keys information
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// make it so liri.js can take in one of the following commands:
console.log(process.argv);
let command = process.argv[2];
console.log(command);
let input = process.argv[3];
console.log(input);


    // concert-this
    // spotify-this-song
    // movie-this
    // do-what-it-says

// concert-this
    // search Bands in Town Artist Events API for an artist
        // render name of venue
        // render venue location
        // render date of the event (use moment to format as MM/DD/YYYY)

// spotify-this-song
    // utilize the node-spotify-api package to retrieve song information
        // render Artist
        // render song name
        // render a preview link of the song from Spotify
        // render the album the song is on
    // if no song is provided, default to "The Sign" by Ace of Base

// movie-this 
    // use axios package to retrive data from OMDB API
        // render title of movie
        // render year movie came out
        // render IMDB rating
        // render Rotten Tomatoes rating
        // render country where movie was produced
        // render language of the movie
        // render plot of the movie
        // render actors in the movie
    // if no song is provided, default to "Mr. Nobody"

// do-what-it-says
    //using fs Node package, take text inside of random.txt and use it to call one of LIRI's commands
    // run spotify-this-song for "I want it That way"




// -------------------------------------------------------------------------
// BONUS
    // output the data to log.txt
    // append each command run to log.txt
    // do not overwrite file each time you run a command
