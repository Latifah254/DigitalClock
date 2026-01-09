// Digital Clock Function
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var session = "AM";
    
    // Convert to 12-hour format
    if (hr >= 12) {
        session = "PM";
        if (hr > 12) {
            hr = hr - 12;
        }
    }
    if (hr == 0) {
        hr = 12;
    }

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    
    document.getElementById("time").innerHTML = hr + ":" + min + ":" + sec + " " + session;

    // Date Display
    var months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    
    document.getElementById("period").innerHTML = date;

    setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Stopwatch Variables
let stopwatchInterval;
let elapsedTime = 0;
let isRunning = false;

// Stopwatch Functions
function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        stopwatchInterval = setInterval(() => {
            elapsedTime++;
            displayStopwatch();
        }, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    isRunning = false;
    displayStopwatch();
}

function displayStopwatch() {
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById("stopwatch-display").innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Initialize on page load
window.onload = function() {
    startTime();
    displayStopwatch();
    
    // Add event listeners to buttons
    document.getElementById("startBtn").addEventListener("click", startStopwatch);
    document.getElementById("pauseBtn").addEventListener("click", pauseStopwatch);
    document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
};