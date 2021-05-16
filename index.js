// Getting all the needed variables prepared
let counter = document.getElementById("counter")
let startCount = 0;
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
const resetBtn = document.getElementById("resetBtn")
let timelyId;
// Getting the buttons to call the nececessary functions
startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)
// Creating the functions for the buttons
function stop () {
    clearInterval(timelyId)
}
function start() {
    timelyId = setInterval(function () {
        counter.textContent = startCount += 1
    }, 1000)
}
function reset() {
    location.reload();
}