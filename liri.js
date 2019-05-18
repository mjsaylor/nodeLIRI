const Axios = require("axios")
const moment = require("moment")
const fs = require("fs")
// require APIs
const Spotify = require("node-spotify-api");
// read and set any environment variables with the dotenv package
require("dotenv").config();
// import the keys.js file and store it in a variable
const keys = require("./keys.js");
// access keys information
const spotify = new Spotify(keys.spotify);


// make it so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

// console.log(process.argv);
let command = process.argv[2];
let input = process.argv[3];

// concert-this
if (command == "concert-this") {
    // console.log("I am searching Bands in Town API")
    // search Bands in Town Artist Events API for an artist
    Axios
        .get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp"`)
        .then(function (response) {
            // console.log(response.data)
            // console.log(JSON.stringify(response.data, null, 2))
            // render name of venue
            let venue = response.data[0].venue.name
            // render venue location
            let venueCity = response.data[0].venue.city
            let venueState = response.data[0].venue.region
            // render date of the event (use moment to format as MM/DD/YYYY)
            let eventDate = moment(response.data[0].datetime, "YYYY-MM-DD, h:mm:ss").format("MM/DD/YYYY")
            console.log(`
        Venue: ${venue}
        Location: ${venueCity}, ${venueState}
        Date: ${eventDate}
        `)
        })

}
// spotify-this-song
function spotifyThisSong(input) {
// if no song is provided, default to "The Sign" by Ace of Base
if (input == undefined) {
    spotify
        .request('https://api.spotify.com/v1/tracks/3DYVWvPh3kGwPasp7yjahc')
        .then(function (data) {
            // console.log(data);
            //   console.log(JSON.stringify(data, null, 2));
            // render Artist
            let songArtist = data.album.artists[0].name
            // render song name
            let songName = data.name
            // render a preview link of the song from Spotify
            let songPreview = data.album.preview_url
            // render the album the song is on
            let songAlbum = data.album.name
            console.log(`
                Title: ${songName}
                Artist/Band: ${songArtist}
                Album: ${songAlbum}
                `)
            if (songPreview == null) {
                console.log("I'm sorry, there is no song preview available")
            } else {
                console.log(songPreview)
            }
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
} else {
    // console.log("I am searching Spotify API")
    // utilize the node-spotify-api package to retrieve song information
    spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        //   console.log(JSON.stringify(data, null, 2));
        // render Artist
        let songArtist = data.tracks.items[0].artists[0].name
        // render song name
        // render a preview link of the song from Spotify
        let songPreview = data.tracks.preview_url
        // render the album the song is on
        let songAlbum = data.tracks.items[0].album.name
        console.log(`
            Title: ${input}
            Artist/Band: ${songArtist}
            Album: ${songAlbum}
            `)
        if (songPreview == null) {
            console.log("I'm sorry, there is no song preview available")
        } else {
            console.log(`Song Preview link: ${songPreview}`)
        }

    });
}
}

if (command == "spotify-this-song") {
    spotifyThisSong(input);
}



// movie-this
if (command == "movie-this") {
    // console.log("I am searching OMDB API")
    // if no song is provided, default to "Mr. Nobody"
    if (input == undefined){
        input = "Mr. Nobody"
    }
    // use axios package to retrive data from OMDB API
    Axios
        .get(`http://www.omdbapi.com/?apikey=trilogy&t=${input}`)
        .then(function (response) {
            // console.log(JSON.stringify(response.data, null, 2));
            // render year movie came out
            let movieYear = response.data.Year
            // render IMDB rating
            let imdbRating = response.data.Ratings[0].Value
            // render Rotten Tomatoes rating
            let rtRating = response.data.Ratings[1].Value
            // render country where movie was produced
            let movieCountry = response.data.Country
            // render language of the movie
            let movieLanguage = response.data.Language
            // render plot of the movie
            let moviePlot = response.data.Plot
            // render actors in the movie
            let movieActors = response.data.Actors
            console.log(`
            Title: ${input}
            Year Released: ${movieYear}
            IMDB Rating: ${imdbRating}
            Rotten Tomatoes Rating: ${rtRating}
            Country produced in: ${movieCountry}
            Language: ${movieLanguage}
            Plot: ${moviePlot}
            Actors: ${movieActors}
            `)
          
        });
}

// do-what-it-says
if (command == "do-what-it-says") {
    //using fs Node package, take text inside of random.txt and use it to call one of LIRI's commands
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        // console.log(data)
        var dataArr = data.split(",");
        // console.log(dataArr)
        // run spotify-this-song for "I want it That way"   
        spotifyThisSong(dataArr[1])
    })
    
}



// -------------------------------------------------------------------------
// BONUS
    // output the data to log.txt
    // append each command run to log.txt
    // do not overwrite file each time you run a command
