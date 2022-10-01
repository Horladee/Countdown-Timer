let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secsEl = document.getElementById("secs");
countdown();
setInterval(countdown, 1000);


function countdown(){
   let futureTime = new Date("1 nov 2022");
   let currentTime = new Date();
   let diff = futureTime - currentTime;

   let days = Math.floor(diff / 1000 / 60 / 60 / 24);
   let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
   let mins = Math.floor(diff / 1000 / 60) % 60;
   let seconds = Math.floor(diff / 1000) % 60;

   daysEl.innerText = days;
   hoursEl.innerText = (hours < 10? "0" + hours : hours);
   minsEl.innerText = (mins < 10? "0" + mins : mins);
   secsEl.innerText = (seconds < 10? "0" + seconds : seconds);
   

}