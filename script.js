// Simple Countdown Clock
const d = document.getElementById("d");
const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");

function getTrueNumber(num) {
    return num < 10 ? "0" + num : num;
}

function calculateRemainingTime() {
    const comingYear = new Date().getFullYear();
    const comingDate = new Date(`Aug 12, ${comingYear} 00:00:00`);

    const now = new Date();
    const remainingTime = comingDate.getTime() - now.getTime();
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);

    d.innerHTML = getTrueNumber(days);
    h.innerHTML = getTrueNumber(hours);
    m.innerHTML = getTrueNumber(mins);
    s.innerHTML = getTrueNumber(secs);

    return remainingTime;
}

function updateCountdown() {
    const remainingTimeInMs = calculateRemainingTime();
    if (remainingTimeInMs <= 1000) {
        clearInterval(interval);
        document.querySelector(".label").innerHTML = "Welcome Back to School!";
        document.querySelector(".time").innerHTML = "<p>The countdown to a new school year at STI has begun! We are excited to see all of you back in the classrooms, ready to learn and grow.</p>";
        document.querySelector(".time").style.color = "yellow";
        document.querySelector(".time").style.backgroundColor  = "blue";
        document.querySelector(".time").style.padding = "25px";
    }
}

function initCountdown() {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
}

initCountdown();