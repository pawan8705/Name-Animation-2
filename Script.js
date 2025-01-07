setInterval(() => {
  date = new Date();
  hourtime = date.getHours();
  minutestime = date.getMinutes();
  secondtime = date.getSeconds();
  hourRotation = 30 * hourtime + minutestime / 2;
  minuteRotation = 6 * minutestime;
  secondRotation = 6 * secondtime;

  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
