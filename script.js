// no event listener; use defer or load at the very end

// part 1
let currentDate = new Date(Date.now());
let yearIn4Digits = currentDate.getFullYear() % 10000; // in case this is executed past 101st century for whatever reason
let dateText = "";

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
let s0 = "123"
let s1 = "456"
let s2 = "asdf"
let s3 = "7.89"
let n0 = Number(s0);
let n1 = Number(s1);
let n2 = Number(s2);
let n3 = Number(s3);
let conversionText = "";

conversionText += "\""+s0+"\": "+n0+" | isNaN: "+Number.isNaN(n0)+" | isInteger: "+Number.isInteger(n0)+"<br/>";
conversionText += "\""+s1+"\": "+n1+" | isNaN: "+Number.isNaN(n1)+" | isInteger: "+Number.isInteger(n1)+"<br/>";
conversionText += "\""+s2+"\": "+n2+" | isNaN: "+Number.isNaN(n2)+" | isInteger: "+Number.isInteger(n2)+"<br/>";
conversionText += "\""+s3+"\": "+n3+" | isNaN: "+Number.isNaN(n3)+" | isInteger: "+Number.isInteger(n3)+"<br/>"; // isn't this literally what array is for?
document.getElementById("conversion").innerHTML = conversionText;
