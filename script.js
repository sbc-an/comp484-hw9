// defer attribute ensures script is ran after elements it selects by IDs are loaded

// part 1
let currentDate = new Date(Date.now());
let dateText = "";
let yearIn4Digits = currentDate.getFullYear() % 10000; // in case this is executed past 101st century for whatever reason

if (currentDate.getMonth() < 9)
    dateText += "0";
dateText += currentDate.getMonth() + 1;
dateText += "/";
if (currentDate.getDate() < 10)
    dateText += "0";
dateText += currentDate.getDate();
dateText += "/";
if (yearIn4Digits < 10)
    dateText += "0";
if (yearIn4Digits < 100)
    dateText += "0";
if (yearIn4Digits < 1000)
    dateText += "0";
dateText += yearIn4Digits;
document.getElementById("date").innerHTML = dateText;

// part 2
