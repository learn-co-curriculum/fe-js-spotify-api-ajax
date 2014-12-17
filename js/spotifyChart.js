var url = "http://charts.spotify.com/api/tracks/most_streamed/us/weekly/latest?callback=?";
var names = [];
var numOfStreams = [];
var ctx;

//write functions to pass spec tests here outside the jQuery doc ready
// then call function within doc ready to get them to work
// and display the chart correctly in index.html.


function success(parsed_json) {
  //call other functions needed here
  
}

$(function() {

  ctx = $("#SpotifyChart").get(0).getContext("2d");
  //getSpotifyTracks(success);  
});