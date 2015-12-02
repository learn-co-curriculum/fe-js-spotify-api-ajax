

# Visualizing Spotify's Popular Genres

## Objectives

* Build a page that uses data from the [Spotify's Chart API](http://charts.spotify.com/docs) to render a bar chart using [Chart.js](http://chartkick.com/). It will display the latests top 20 streamed songs in the US and will have track names on the x-axis and number of streams on the y-axis.

<img src="http://ironboard-curriculum-content.s3.amazonaws.com/front-end/lab-assets/example.png" alt="example pic">

* Learn how to use AJAX to keep data current.
* Use a JavaScript visualization library.

## Steps

1. Fork this repository.
2. Clone your fork locally.
3. cd into the local repos folder.
4. Open SpecRunner.html in your browser. Also open index.html
5. Make the tests pass in spec/spotifyChartSpec.js by writing the code neccesary in js/spotifyChart.js also make sure when your finished the chart is appearing in index.html

## Instructions

* Require jQuery at the top of `index.html`. Double check that it was correctly required by typing `jQuery` in the browser console or just `$`. This should return a function, not "undefined".
* You'll be using [Chart.js](http://www.chartjs.org/) to visualize the JSON from Weather Underground so check it out. Require the `Chart.js` library in the head of your HTML file. Double check that you required the library correctly by typing `Chart` into the browser's console. A function should be returned, not "undefined".
* Require `spotifyChart.js` below the lines where you required jQuery and Chart.js.
* Get the address where the latest most streamed songs in the US for the week are returned. Read the [docs](http://charts.spotify.com/docs) to figure out what it should be. You will need to use the URL for jsonp.

## Resources

* [Spotify Chart Docs](http://charts.spotify.com/docs)
* [jQuery](http://api.jquery.com/) - [AJAX](http://api.jquery.com/jquery.ajax/)
* [Chart.js](http://www.chartjs.org/docs/#getting-started) - [Bar Chart](http://www.chartjs.org/docs/#bar-chart-example-usage)
* [Jasmine 2.0 Documentation](http://jasmine.github.io/2.0/introduction.html)

<a href='https://learn.co/lessons/fe-js-spotify-api-ajax' data-visibility='hidden'>View this lesson on Learn.co</a>
