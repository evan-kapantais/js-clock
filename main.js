const hourHand = document.querySelector(".hand-hours");
const minuteHand = document.querySelector(".hand-minutes");
const secondHand = document.querySelector(".hand-seconds");

function setDate () {
  let date = new Date();

  const seconds = date.getSeconds();
  const secondsDegrees = seconds / 60 * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = date.getMinutes();
  const minutesDegrees = minutes / 60 * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = date.getHours();
  const hoursDegrees = hours / 12 * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(date);
}

setInterval(setDate, 1000);