// STOPWATCH
const minutesBlock = document.querySelector('#minutes'),
    secondsBlock = document.querySelector('#seconds'),
    mlSecondsBlock = document.querySelector('#ml-seconds'),
    startButton = document.querySelector('#start'),
    stopButton = document.querySelector('#stop'),
    resetButton = document.querySelector('#reset')

let interval
let minutes = 0
let seconds = 0
let mlSeconds = 0

const startTimer = () => {
    mlSeconds++
    mlSeconds <= 99 && (mlSecondsBlock.innerHTML = mlSeconds)
    mlSeconds == 100 && (mlSecondsBlock.innerHTML = '00')

    mlSecondsBlock.innerHTML = `0${mlSeconds}`
    mlSeconds > 9 && (mlSecondsBlock.innerHTML = mlSeconds)
    if (mlSeconds > 99) {
        seconds++
        secondsBlock.innerHTML = `0${seconds}`
        mlSeconds = 0
    }
    seconds > 9 && (secondsBlock.innerHTML = seconds)
    if (seconds > 59) {
        minutes++
        minutesBlock.innerHTML = `0${minutes}`
        seconds = 0
        secondsBlock.innerHTML = `0${seconds}`
    }
    minutes > 9 && (minutesBlock.innerHTML = minutes)
}

startButton.onclick = () => {
    clearInterval(interval)
    interval = setInterval(startTimer,  10)
}

stopButton.onclick = () => {
    clearInterval(interval)
}

resetButton.onclick = () => {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    mlSeconds = 0
    minutesBlock.innerHTML = '00'
    secondsBlock.innerHTML = '00'
    mlSecondsBlock.innerHTML = '00'
}
