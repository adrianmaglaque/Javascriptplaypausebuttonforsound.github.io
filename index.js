//button 2 function

function button1() {
  var sound1 = document.getElementById("sound1");
  var musicplayer = document.getElementById("musicplayer");

  //CHANGE sound1 .pause and .play () if statements if you change sound1 variable EXAMPLEGIVEN: sound2.paused, sound2.play(), sound2.pause
  if (sound1.paused) {
    sound1.play();
    musicplayer.innerHTML = "Pause Music/Sound 1";
  } else {
    sound1.pause();
    musicplayer.innerHTML = "Play Music/Sound 1";
  }
}
//button2 function
function button2() {
  var sound2 = document.getElementById("sound2");
  var musicplayer2 = document.getElementById("musicplayer2");

  //CHANGE sound1 .pause and .play () if statements if you change sound1 variable EXAMPLEGIVEN: sound3.paused, sound3.play(), sound3.pause

  if (sound2.paused) {
    sound2.play();
    musicplayer2.innerHTML = "Pause Music/Sound 2";
  } else {
    sound2.pause();
    musicplayer2.innerHTML = "Play Music/Sound 2";
  }
}
