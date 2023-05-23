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

function shegotmelike() {
  var shegotmelike = document.getElementById("shegotmelike");
  var musicplayer2 = document.getElementById("musicplayer2");

  if (shegotmelike.paused) {
    shegotmelike.play();
    musicplayer2.innerHTML = "Pause Music - SheGotMeLike";
  } else {
    shegotmelike.pause();
    musicplayer2.innerHTML = "Play Music - SheGotMeLike";
  }
}
