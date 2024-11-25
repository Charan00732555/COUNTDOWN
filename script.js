const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "9 Dec 2024 17:00:00";

// Array of background images
const backgrounds = [
   './BG_1.jpg',
   './BG_2.jpg',
   './BG_3.jpg',
   './BG_4.png',
   './BG_5.jpg',
   './BG_6.jpg'
];

let backgroundIndex = 0;

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
    // Increment the index and loop back to the start if needed
    backgroundIndex = (backgroundIndex + 1) % backgrounds.length;

    // Set the new background
    document.body.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;
}

// Initial calls
countdown();
changeBackground();

// Update the countdown every second
setInterval(countdown, 1000);

// Update the background every 10 seconds
setInterval(changeBackground, 10000);
