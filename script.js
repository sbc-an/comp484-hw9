// defer attribute ensures script is ran after elements it selects by IDs are loaded

// part 1
let currentDate = new Date(Date.now());
let dateText = "";

if (currentDate.getMonth() < 9)
{
    dateText += "0";
}
dateText += currentDate.getMonth() + 1;
dateText += "/";
if (currentDate.getDate() < 10)
{
    dateText += "0";
}
dateText += currentDate.getDate();
dateText += "/";
if (currentDate.getFullYear() < 10)
{
    dateText += "0";
}
if (currentDate.getFullYear() < 100)
{
    dateText += "0";
}
if (currentDate.getFullYear() < 1000)
{
    dateText += "0";
}
dateText += currentDate.getFullYear(); // this will give a 5-digit year output by 101st century, which I'm not gonna bother fixing
document.getElementById("date").innerHTML = dateText;

// part 2
