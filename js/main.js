const player = document.querySelector(".player"),
  prevBtn = document.querySelector(".prev"),
  playBtn = document.querySelector(".play"),
  nextBtn = document.querySelector(".next"),
  audio = document.querySelector(".audio"),
  progressContainer = document.querySelector(".progress__container"),
  title = document.querySelector(".song"),
  cover = document.querySelector(".cover__img"),
  progress = document.querySelector(".progress"),
  imgSrc = document.querySelector(".img__src"),
  range = document.querySelector('.range');

const songs = [
  "Hollywood Undead - Gravity",
  "Gorillaz - Clint Eastwood",
  "Linkin Park - Numb",
];

let songIndex = 0;

function loadSong(song) {
  title.innerHTML = song;
  audio.src = `audio/${song}.mp3`;
  cover.src = `images/cover${songIndex + 1}.jpg`;
}

loadSong(songs[songIndex]);

function playSong() {
  player.classList.add("play");
  imgSrc.src = "./images/pause.svg";
  audio.play();
}

function pauseSong() {
  player.classList.remove("play");
  imgSrc.src = "./images/play.svg";
  audio.pause();
}

playBtn.addEventListener("click", () => {
  const isPlaying = player.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener("click", () => {
  nextSong();
});

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

prevBtn.addEventListener("click", () => {
  prevSong();
});

function updateProgress(e) {
  const {
    duration,
    currentTime
  } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

audio.addEventListener("timeupdate", updateProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);

function setVolume() {
  let value = range.value / 100;
  audio.volume = value;
}

range.addEventListener('click', setVolume);