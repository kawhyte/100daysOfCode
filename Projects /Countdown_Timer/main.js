const startTime = 25;
let time =  startTime * 60;

const startTimerBtn =  document.getElementById('get_Timer')

const countdownElement =  document.getElementById("timer")


startTimerBtn.addEventListener('click', ()=>{

    setInterval(updateCountdown, 1000);
});

 
function updateCountdown(){

const minutes = Math.floor(time/60);
let seconds = time % 60
seconds =  seconds < 10 ? "0" + seconds : seconds

countdownElement.innerHTML = `${minutes}:${seconds}`
time--;
}
