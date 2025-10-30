let selectedSound = null;
let currentAudio = null;

const label = document.getElementById('selectedSoundLabel');
const volume = document.getElementById('volumeSlider');
const stop = document.getElementById('stopButton');

document.querySelectorAll('.sound-item').forEach(btn =>
  btn.onclick = () => {
    selectedSound = btn.dataset.sound;
    label.textContent = `Selected: ${selectedSound}`;
    console.log("Sound selected: " + selectedSound);
  }
);

document.getElementById('trigger').onclick = () => {
  if (!selectedSound) return;

  if (currentAudio) currentAudio.pause();
  currentAudio = new Audio(`Sounds/default/${selectedSound}`);
  currentAudio.volume = volume.value;
  currentAudio.play();
  console.log("playing sound");
};

volume.oninput = () => {
  if (currentAudio) currentAudio.volume = volume.value;
  console.log("Volume:" + volume.value);
};

stop.onclick = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    console.log("stopped playing");
  }
};