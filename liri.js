const Axios = require("axios")
const moment = require("moment")
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
    console.log("I am searching Bands in Town API")
    // search Bands in Town Artist Events API for an artist
    Axios
        .get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp"`)
        .then(function (response){
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
if (command == "spotify-this-song") {
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
                console.log(
                `Title: ${songName}
                Artist/Band: ${songArtist}
                Album: ${songAlbum}`
                )
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
        console.log("I am searching Spotify API")
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
            console.log("Title: ", input)
            console.log("Artist/Band:", songArtist)
            console.log("Album: ", songAlbum)
            if (songPreview == null) {
                console.log("I'm sorry, there is no song preview available")
            } else {
                console.log(songPreview)
            }

        });
    }
}



// movie-this
if (command == "movie-this") {
    console.log("I am searching OMDB API")
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
}

// do-what-it-says
    //using fs Node package, take text inside of random.txt and use it to call one of LIRI's commands
    // run spotify-this-song for "I want it That way"




// -------------------------------------------------------------------------
// BONUS
    // output the data to log.txt
    // append each command run to log.txt
    // do not overwrite file each time you run a command
