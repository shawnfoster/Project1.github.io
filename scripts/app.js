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
  fx:         "bigMuff",
  guitarist:  'Billy Corgan',
  band:       'Smashing Pumpkins'
}, {
  file:       'sound_clips/come-as-you-are-chorus.mp3',
  fx:         'chorus',
  guitarist:  'Kurt Cobain',
  band:       'Nirvana'
}, {
  file:       'sound_clips/crazy-train-marshall.mp3',
  fx:         'marshall',
  guitarist:  'Randy Rhodes',
  band:       'Black Sabbath'
}, {
  file:       'sound_clips/dont-dream-its-over-chorus.mp3',
  fx:         'chorus',
  guitarist:  'Unknown',
  band:       'Crowded House'
}, {
  file:       'sound_clips/glycerine-big-muff.mp3',
  fx:         'bigMuff',
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
  fx:         'Marshall',
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
  fx:         'marshall',
  guitarist:  'Slash',
  band:       'Guns n Roses'
}, {
  file:       'sound_clips/the-joker--wahwah.mp3',
  fx:         'flanger',
  guitarist:  'Lenny Kravitz'
}, {
  file:       'sound_clips/are-you-gonna-go-my-way-flanger.mp3',
  fx:         'flanger',
  guitarist:  'Lenny Kravitz'
}, {
  file:       'sound_clips/are-you-gonna-go-my-way-flanger.mp3',
  fx:         'flanger',
  guitarist:  'Lenny Kravitz'
}];

// [{...}, {...}]
// sound_clips/barracuda-flanger.mp3
// sound_clips/cherub-rock---muff---phaser.mp3
// sound_clips/come-as-you-are-chorus.mp3
// sound_clips/crazy-train-marshall.mp3
// sound_clips/dont-dream-its-over-chorus.mp3
// sound_clips/glycerine-big-muff.mp3
// sound_clips/message-in-a-bottle-chorus.mp3
// sound_clips/more-than-a-feeling-chorus.mp3
// sound_clips/november-rain---marshall.mp3

var songSelected = songList[Math.floor(Math.random() * (songList.length - 1))],
    player        = $('audio')[0],
    playerSource  = $('audio source')[0],
    score         = 0;

// Change player <source> 'src' attribute to current song
playerSource.src = songSelected.file;
player.load();

$('button').click(function(evt) {
  evt.preventDefault(); // Prevent form from submitting

  var choice = $('input[name="testone"]:checked').val();
  console.log(choice);
  if (!choice) {
    alert('Select an FX');
    return false;
  } else if (choice.toLowerCase() === songSelected.fx.toLowerCase()) {
    // 1. add one to score
    alert('You are correct!');
    score += 1;
    // 2. Replace text of .score element with updated score
    $('.score').text(score)
  } else if (choice !== songSelected.fx) {
    alert('You are wrong! The correct answer is ' + songSelected.fx)
  }
  // 3. Choose a new random song
  songSelected = songList[Math.floor(Math.random() * (songList.length - 1))];
  // 4. Update the player .src with new song file
  playerSource.src = songSelected.file;
  player.load();
  // 5. Load the player again (?)
});
