let audio = document.getElementById('audio');
let audioON = document.getElementById('audio-on');
let audioOFF = document.getElementById('audio-off');
let display = false;

function playAudio() {
    if (!display) {
        display = true;
        audio.play();
        audioOFF.classList.add('remove-audio-off');
        audioON.classList.remove('audio-on');
        audioON.style.cursor = "pointer";
    } else {
        display = false;
        audio.pause();
        audioOFF.classList.remove('remove-audio-off');
        audioON.classList.add('audio-on');
    }
};
