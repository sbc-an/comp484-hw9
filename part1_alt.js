// alternative version that uses mod and div instead of if/else

let currentDate = new Date(Date.now());
let yearIn4Digits = currentDate.getFullYear() % 10000; // in case this is executed past 101st century for whatever reason
let monthIn2Digits = currentDate.getMonth() + 1;
let dayIn2Digits = currentDate.getDate();
let dateText = "";

dateText += Math.trunc(monthIn2Digits / 10);
dateText += Math.trunc(monthIn2Digits % 10);
dateText += "/";
dateText += Math.trunc(dayIn2Digits / 10);
dateText += Math.trunc(dayIn2Digits % 10);
dateText += "/";
dateText += Math.trunc(yearIn4Digits / 1000);
dateText += Math.trunc(yearIn4Digits % 1000 / 100);
dateText += Math.trunc(yearIn4Digits % 100 / 10);
dateText += Math.trunc(yearIn4Digits % 10);
document.getElementById("date").innerHTML = dateText;
