const daysElem = document.getElementById("Jours");
const hoursElem = document.getElementById("Heures");
const minsElem = document.getElementById("Minutes");
const secondsElem = document.getElementById("Secondes");

const newYears = "1 Janvier 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElem.innerHTML = days;
    hoursElem.innerHTML = formatTime(hours);
    minsElem.innerHTML = formatTime(mins);
    secondsElem.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
