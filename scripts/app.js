// This is the array of all songs that will be sampled Randomly
var songList = [{
  file:       'sound_clips/are-you-gonna-go-my-way-flanger.mp3',
  fx:         'flanger',
  guitarist:  'Lenny Kravitz',
  band:       'Lenny Kravitz'
}, {
  file:       'sound_clips/barracuda-flanger.mp3',
  fx:         'flanger',
  guitarist:  'Unknown',
  band:       'Heart'
}, {
  file:       'sound_clips/cherub-rock---muff---phaser.mp3',
  fx:         "bigmuff",
  guitarist:  'Billy Corgan',
  band:       'Smashing Pumpkins'
}, {
  file:       'sound_clips/come-as-you-are-chorus.mp3',
  fx:         'chorus',
  guitarist:  'Kurt Cobain',
  band:       'Nirvana'
}, {
  file:       'sound_clips/crazy-train-marshall.mp3',
  fx:         'stock',
  guitarist:  'Randy Rhodes',
  band:       'Black Sabbath'
}, {
  file:       'sound_clips/dont-dream-its-over-chorus.mp3',
  fx:         'chorus',
  guitarist:  'Unknown',
  band:       'Crowded House'
}, {
  file:       'sound_clips/glycerine-big-muff.mp3',
  fx:         'bigmuff',
  guitarist:  'Gavin Rosdale',
  band:       'Bush'
}, {
  file:       'sound_clips/message-in-a-bottle-chorus.mp3',
  fx:         'chorus',
  guitarist:  'Unknown',
  band:       'The Police'
}, {
  file:       'sound_clips/more-than-a-feeling-chorus.mp3',
  fx:         'chorus',
  guitarist:  'Unknown',
  band:       'Boston'
}, {
  file:       'sound_clips/november-rain---marshall.mp3',
  fx:         'stock',
  guitarist:  'Slash',
  band:       'Guns N Roses'
}, {
  file:       'sound_clips/paranoid-android---phaser.mp3',
  fx:         'Phaser',
  guitarist:  'unknown',
  band:       'Radiohead'
}, {
  file:       'sound_clips/soma---phaser.mp3',
  fx:         'Phaser',
  guitarist:  'Billy Corgan',
  band:       'Smashing Pumpkins'
}, {
  file:       'sound_clips/surfing-with-the-alien---wah.mp3',
  fx:         'wahwah',
  guitarist:  'Joe Satriani',
  band:       'Joe Satriani'
}, {
  file:       'sound_clips/sweet-child-o-mine---Marshall.mp3',
  fx:         'stock',
  guitarist:  'Slash',
  band:       'Guns n Roses'
}, {
  file:       'sound_clips/the-joker--wahwah.mp3',
  fx:         'wahwah',
  guitarist:  'Unknown',
  band:       'Steve Miller Band'
}, {
  file:       'sound_clips/with-or-without-you---delay.mp3',
  fx:         'delay',
  guitarist:  'Edge',
  Band:       'U2'
}, {
  file:       'sound_clips/youth-of-the-nation---delay.mp3',
  fx:         'delay',
  guitarist:  'Unkown',
  band:       'POD'
}];

// this is the variable that related back to songlist above and uses the math.random feature to randomly play
var songSelected = songList[Math.floor(Math.random() * (songList.length - 1))],
    player        = $('audio')[0],
    playerSource  = $('audio source')[0],
    score         = 0;

// Change player <source> 'src' attribute to current song
playerSource.src = songSelected.file;
player.load();

// these are the functions related to answer submission button.
$('button').click(function(evt) {
  evt.preventDefault(); // Prevent form from submitting

// This variable uses the radio form to deterine if no choice was made, so that an alert remind user to select and FX
var choice = $('input[name="testone"]:checked').val();
console.log(choice);
  if (!choice) {
    alert('Select an FX');
    return false;
  // if a selection is made, the choice is compared to key and value of the fx properties from array of songs
  } else if (choice.toLowerCase() === songSelected.fx.toLowerCase()) {
    // if selection is correct, an alert is issued to confirm that user is correct and adds one to score
    $('.fire').show()
    alert('You are correct!');
    score += 1;
    // Replace text of .score element with updated score
  $('.score').text(score)
  // if choice does not equal the key nd value, an alert is kicked back informing that selection was wrong and then provides the correct answer
  } else if (choice !== songSelected.fx) {
    alert('You are incorrect! The correct answer is ' + songSelected.fx + '!')
  }

// Choose a new random song
songSelected = songList[Math.floor(Math.random() * (songList.length - 1))];
// Update the player .src with new song file and Load the player again
playerSource.src = songSelected.file;
player.load();
$('.fire').hide()
});
