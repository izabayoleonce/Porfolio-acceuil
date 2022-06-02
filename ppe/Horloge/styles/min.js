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


setInterval(updateTime, 1000);
//Declaration de la varible sartTime
let startTimer = null;

start.addEventListener('click', function(){
    //initialise la variable
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
    //arrêter le chronomètre après avoir appuyé sur "reset"
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
//de sorte que le temps ne descende pas lors de la sélection d'un nouveau temps après avoir appuyé sur réinitialiser
function stopInterval() {
    clearInterval(startTimer);
}