function symbolism() {
  var symbolismmusic = document.getElementById("symbolism");
  var musicplayer = document.getElementById("musicplayer");

  if (symbolismmusic.paused) {
    symbolismmusic.play();
    musicplayer.innerHTML = "Pause Music - Symbolism";
  } else {
    symbolismmusic.pause();
    musicplayer.innerHTML = "Play Music - Symbolism";
  }
}

function music2() {
  var music2 = document.getElementById("symbolism");
  var musicplayer2 = document.getElementById("musicplayer2");

  if (music2.paused) {
    music2.play();
    musicplayer2.innerHTML = "Pause Music - music2";
  } else {
    music2.pause();
    musicplayer2.innerHTML = "Play Music - music2";
  }
}
