$(document).ready(function(evt) {
  console.log('Animations Boilerplate is a go.');

  // create some events to hide '.news' and '.weather'
  $('#weather-btn').click(function(evt) {
    // select '.weather' and .hide() it
    $('.weather').hide();
  });
  // now hide '.news' and .hide() it
  $('#news-btn').click(function(evt) {
    // $('.news').hide();
    $('.news').slideUp();
  });
  // what if we want to see them all again?
  $('#show-and-hide-btn').click(function(evt) {
    // we miss you! .show() to come back
    // $('.news').show();
    // $('.weather').show();
    $('.news').slideDown();
    $('.weather').slideDown();
  });

$('#lost-btn').click(function(evt) {
  // select '.weather' and .hide() it
  $('.lost').hide();
});
// now hide '.news' and .hide() it
$('#lost-btn').click(function(evt) {
  $('.lost').hide();
});

$('#move-img').click(function(evt) {
  $('img').animate( {
    opacity: 0.5,
    width: "10%"
  }, 100, function() {
    console.log('Mario Moves');
  });
});
});
