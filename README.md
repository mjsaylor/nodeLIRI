# nodeLIRI
Command line node app that takes in parameters and gives back data

## How to Use
nodeLIRI accepts user input from the command line and returns data in a readable format based on user's query. Information is returned from **Node Spotify API**, **Bands in Town API** and **OMDB API**

### Search a song track
User enters command "spotify-this-song" followed by the song they wish to search:

![](/images/spotify-tellitomyheart.gif)

nodeLIRI will display song name, artist name, song album, and preview link to the track (if available)

If "spotify-this" command is given with no song, nodeLIRI will by default search for "The Sign" for "Ace of Base"

![](/images/spotify-default.gif)

### Search a band's upcoming shows
User enters command "concert-this" followed by the band/artist they wish to search:

![](/images/concert-this-larkin-poe.gif)

nodeLiri will display name of venue, date, and location

### Search a movie
User enters command "movie-this" followed by the movie they wish to search:

![](/images/movie-this-drop-dead-gorgeous.gif)


