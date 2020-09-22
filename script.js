const daysEl = document.getElementById('days') ;
const hoursEl = document.getElementById('hours') ;
const minutsEl = document.getElementById('minuts') ;
const secondsEl = document.getElementById('seconds') ;

// Set New Year's Date
const newYear = '1 Jan 2021';

function newYearCount(){
    // Set new year's eve to Date constructor
    const newYearDate = new Date(newYear);

    const currentDate = new Date();
    // set total seconds until new year's eve.
    const totalSeconds = (newYearDate - currentDate) / 1000;

    // 
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minuts = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60 ;

    daysEl.innerHTML = days
    hoursEl.innerHTML = timeFormat(hours)
    minutsEl.innerHTML = timeFormat(minuts)
    secondsEl.innerHTML = timeFormat(seconds)
    
    function timeFormat(time){
        return time < 10? (`0${time}`): time
    }
    
}
newYearCount()

setInterval(newYearCount, 1000);