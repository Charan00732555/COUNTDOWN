const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "8 Dec 2025 17:00:00";
const backgrounds = [
    './BG_1.jpg',
    './BG_2.jpg',
    './BG_3.jpg',
    './BG_4.png',
    './BG_5.jpg',
    './BG_6.jpg'
];
let backgroundIndex = 0;
const layers = [document.createElement('div'), document.createElement('div')];

layers.forEach((layer, index) => {
    layer.className = 'background-layer';
    document.body.appendChild(layer);
    if (index === 0) {
        layer.classList.add('visible');
        layer.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;
    }
});

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function changeBackground() {
    const currentLayer = layers[backgroundIndex % 2];
    const nextLayer = layers[(backgroundIndex + 1) % 2];
    backgroundIndex = (backgroundIndex + 1) % backgrounds.length;

    nextLayer.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;

    currentLayer.classList.remove('visible');
    nextLayer.classList.add('visible');
}

// Initialize countdown and transitions
countdown();
setInterval(countdown, 1000);
setInterval(changeBackground, 10000);
