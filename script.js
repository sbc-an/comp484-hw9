// no event listener; use defer or load at the very end

// part 1
let currentDate = new Date(Date.now());
let yearIn4Digits = currentDate.getFullYear() % 10000; // in case this is executed past 101st century for whatever reason
let dateText = "";

if (currentDate.getMonth() < 9)
    dateText += "0" + (currentDate.getMonth() + 1);
else // part 4 #1
    dateText += currentDate.getMonth() + 1;
dateText += "/";
if (currentDate.getDate() < 10)
    dateText += "0" + currentDate.getDate();
else // part 4 #2. not a very optimal use of else. see below 4-digit checker
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
let string0 = "123"
let string1 = "456"
let string2 = "asdf"
let string3 = "7.89"
let number0 = Number(string0);
let number1 = Number(string1);
let number2 = Number(string2);
let number3 = Number(string3);
let conversionText = "";

conversionText += "\""+string0+"\": "+number0+" | isNaN: "+Number.isNaN(number0)+" | isInteger: "+Number.isInteger(number0)+"<br/>";
conversionText += "\""+string1+"\": "+number1+" | isNaN: "+Number.isNaN(number1)+" | isInteger: "+Number.isInteger(number1)+"<br/>";
conversionText += "\""+string2+"\": "+number2+" | isNaN: "+Number.isNaN(number2)+" | isInteger: "+Number.isInteger(number2)+"<br/>";
conversionText += "\""+string3+"\": "+number3+" | isNaN: "+Number.isNaN(number3)+" | isInteger: "+Number.isInteger(number3)+"<br/>"; // isn't this literally what arrays are for?
document.getElementById("conversion").innerHTML = conversionText;

// part 3
let mathNum0 = Number.parseFloat("12345.67890abcdefg.hijklmnopqrs.tuvwxyz");
let mathNum1 = Number.parseInt("0x7fff", 16);
let mathNum2 = 12345;
let formattingText = "";

formattingText += "Number.parseFloat(\"12345.67890abcdefg.hijklmnopqrs.tuvwxyz\")<br/>= "+mathNum0+"<br/>";
formattingText += "Number.parseInt(\"0x7fff\", 16)<br/>= "+mathNum1+"<br/>";
formattingText += mathNum0+".toFixed(2)<br/>= "+mathNum0.toFixed(2)+"<br/>";
formattingText += mathNum0+" + "+mathNum2+"<br/>= "+(mathNum0 + mathNum2)+"<br/>";
formattingText += mathNum0+" * "+mathNum2+"<br/>= "+(mathNum0 * mathNum2)+"<br/>";
formattingText += mathNum0+".toLocaleString(\"en-US\")<br/>= "+mathNum0.toLocaleString("en-US")+"<br/>";
formattingText += mathNum0+".toLocaleString(\"de-DE\")<br/>= "+mathNum0.toLocaleString("de-DE")+"<br/>";
document.getElementById("formatting").innerHTML = formattingText;
