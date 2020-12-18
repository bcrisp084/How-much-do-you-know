const startTimer = document.querySelector(".countdown");
let secondsLeft = 60;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    startTimer.textContent = secondsLeft;
    console.log(setTime);
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
setTime();
