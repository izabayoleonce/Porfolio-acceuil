let start = document.getElementById('start');
let reset = document.getElementById('reset');

let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("sec");

const display = document.getElementById('clock');
const audio = new Audio('../audio/alarm.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const date = new Date();

    const hour    = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());



    display.innerText=`${hour} : ${minutes} : ${seconds}`
}
/*
function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}*/

setInterval(updateTime, 1000);
//store a reference to the startTimer variable
let startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 00;
    m.value = 00;
    s.value = 00;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer(){
    if(h.value == 00 && m.value == 00 && s.value == 00){
        h.value = 00;
        m.value = 00;
        s.value = 00;
    } else if(s.value != 00){
        s.value--;
    } else if(m.value != 00 && s.value == 00){
        s.value = 59;
        m.value--;
    } else if(h.value != 00 && m.value == 00){
        m.value = 60;
        h.value--;
    }
    
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}