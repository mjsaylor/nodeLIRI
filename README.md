# nodeLIRI
Command line node app that takes in parameters and gives back data

## How to Use
nodeLIRI accepts user input from the command line and returns data in a readable format based on user's query. Information is returned from **Node Spotify API**, **Bands in Town API** and **OMDB API**

### Search a song track
User enters command **"spotify-this-song"** followed by the song they wish to search.
nodeLIRI will display song name, artist name, song album, and preview link to the track (if available):

![](/images/spotify-tell-it-to-my-heart.gif)

If **"spotify-this-song"** command is given with no song, nodeLIRI will by default search for "The Sign" for "Ace of Base"

![](/images/spotify-default.gif)

### Search a band's upcoming shows
User enters command **"concert-this"** followed by the band/artist they wish to search:

![](/images/concert-this-larkin-poe.gif)

nodeLiri will display name of venue, date, and location

### Search a movie
User enters command **"movie-this"** followed by the movie they wish to search.
nodeLiri will display name, title, year released, ratings (IMDB + Rotten Tomatoes), language, plot, and actors:

![](/images/movie-this-drop-dead-gorgeous.gif)

If **"movie-this"** command is given with no song, nodeLIRI will by default search for "Mr. Nobody"

![](/images/movie-this-default)

### Do What it Says
User enters command **"do-what-it-says"**
nodeLIRI will automatically **"spotify-this-song"** _I Want it That Way by the Backstreet Boys_

![](/images/do-what-it-says.gif)

## Technologies Used
*APIS
    *Node-Spotify-API
    *OMDB API
    *Bands In Town API
*Moment
*DotEnv
*Axios



