let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

setInterval(() => {
  let currentTime = new Date();
  hours.innerText =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.innerText =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.innerText =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
