console.log("connected");
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secDergees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDergees}deg)`;
  console.log(seconds);
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  const minutes = now.getMinutes();
  const minDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  console.log(`this is hours${hours}`);
  console.log(`this is min${minutes}`);
}

setInterval(setDate, 1000);

//one problem at 0 sec animation problem as rotated immedaitely from 0 to 90 so animation glitch to correct it remove tranform at 0th sec only.
