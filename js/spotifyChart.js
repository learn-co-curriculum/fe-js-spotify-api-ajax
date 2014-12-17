function init(){
  getSpotifyTracks(function(parsed_json) {
    var tracks = extractTop20Tracks(parsed_json.tracks);
    var ctx = $("#SpotifyChart").get(0).getContext("2d");
    var myLineChart = new Chart(ctx).Bar(chartData(extractNames(tracks), extractNumberOfStreams(tracks)), {});
  });
}

// Spotify API Endpoint: http://charts.spotify.com/api/tracks/most_streamed/us/weekly/latest

$(document).ready(function() {
  init();
});
