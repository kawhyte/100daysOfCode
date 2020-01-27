let startTime = .1;
let time = startTime * 60;
// let isPaused = false;
let isStarted = false;
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');


const startTimerBtn = document.getElementById("start_Timer");
const resetTimerBtn = document.getElementById("reset_Timer");
// const pauseTimerBtn = document.getElementById("pause_Timer");

const countdownElement = document.getElementById("timer");
let interval = 0;
//let set = setInterval(updateCountdown, 1000);

startTimerBtn.addEventListener("click", () => {
  console.log("Is Started", isStarted);

  if (isStarted === true) {
    return;
  }

  isStarted = true;
  interval = setInterval(updateCountdown, 1000);
});

// pauseTimerBtn.addEventListener("click", () => {
//   isPaused = isPaused === false ? true : false;
//   console.log("is pasued", isPaused);
//   console.log("current Time", countdownElement.innerHTML);
//   let temp = countdownElement.innerHTML;

//   if (isPaused) {
//     clearInterval(interval);
//   } else {
//     countdownElement.innerHTML = temp;
//     setInterval(updateCountdown, 1000);
//   }
// });

resetTimerBtn.addEventListener("click", () => {
  clearInterval(interval);
  startTime = 25;
  countdownElement.innerHTML = `25:00`;
  isStarted = false;
});

function updateCountdown() {
  console.log("time", time);
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownElement.innerHTML = `${minutes}:${seconds}`;
  time--;

  isStarted === true;
  console.log("current time", countdownElement.innerHTML);
  if (time <= 0) {
    //audio.play();
   
    location.reload();
    // console.log("Zero", countdownElement.innerHTML);
    // countdownElement.innerHTML = `25:00`;
    // clearInterval(interval);
    // isStarted = false;
    // startTime = 25;
  }
}
