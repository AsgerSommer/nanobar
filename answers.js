var date = new Date();
var dato = date.getDay();
var time = date.getHours()*100 + date.getMinutes();
var cleanDay = new Date(2017,10,08);
var cleanDiff = date - cleanDay;
var cleanDays = Math.floor(cleanDiff/(60*60*1000*24)*1);
var doomsDay = new Date(2017,11,20);
var doomDiff = date - doomsDay;
var doomDays = -Math.floor(doomDiff/(60*60*1000*24)*1);

var yesWords = ["Ja", "Yeps", "Helt klart", "Jepper", "Tjek", "True", "Yeah", "Jep", "Yes"];
var noWords = ["Nej", "Næh", "Nope", "Niksen biksen", "Næppe", "Helt klart ikke", "No", "Nah", "False"];
var catAnswers = ["Ja", "Nej"];

var yesWord1 = yesWords[Math.floor(Math.random() * yesWords.length)];
var yesWord2 = yesWords[Math.floor(Math.random() * yesWords.length)];
var noWord = noWords[Math.floor(Math.random() * noWords.length)];
var catAnswer = catAnswers[Math.floor(Math.random() * catAnswers.length)];

if (dato == 0 || dato == 6) {document.getElementById("svar1").innerHTML = yesWord1 + ", husk studiekort i weekenden.";}
else if (1700 <= time || time <= 700) {document.getElementById("svar1").innerHTML = yesWord1 + ", husk studiekort efter kl. 17.";}
else {document.getElementById("svar1").innerHTML = yesWord1 + ".";}

// document.getElementById("svar2").innerHTML = ".." + noWord+".";
// if (cleanDays <= 180) {document.getElementById("svar2").innerHTML = yesWord2 + ", det er den faktisk!" ;}
// else {document.getElementById("svar2").innerHTML = noWord + ".";}
document.getElementById("svar3").innerHTML = catAnswer + ".";
document.getElementById("q2").innerHTML = "Dage siden sidste rengøring: " + cleanDays;
document.getElementById("q3").innerHTML = "Dage til elektro-dommedag: " + doomDays;


