const startTime = 20;
let time =  startTime * 60;

const countdownElement =  document.getElementById("timer")


 setInterval(updateCountdown, 1000)
function updateCountdown(){

const minutes = Math.floor(time/60);
let seconds = time % 60
seconds =  seconds < 10 ? "0" + seconds : seconds

countdownElement.innerHTML = `${minutes}:${seconds}`
time--;
}
