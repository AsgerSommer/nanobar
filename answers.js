// words
var yesWords = ["Ja", "Yeps", "Helt klart", "Jepper", "Tjek", "True", "Yeah", "Jep", "Yes"];
var noWords = ["Nej", "Næh", "Nope", "Niksen biksen", "Næppe", "Helt klart ikke", "No", "Nah", "False"];
var catAnswers = ["Ja", "Nej"];

// chose the words... carefully
var yesWord1 = yesWords[Math.floor(Math.random() * yesWords.length)];
var yesWord2 = yesWords[Math.floor(Math.random() * yesWords.length)];
var noWord = noWords[Math.floor(Math.random() * noWords.length)];
var catAnswer = catAnswers[Math.floor(Math.random() * catAnswers.length)];

// get the current date
var date = new Date();
var dato = date.getDay();
var time = date.getHours()*100 + date.getMinutes();

// special days (remember, january is month 0)
var cleanDay = new Date(2017,10,8);
var cleanDiff = date - cleanDay;
var cleanDays = Math.floor(cleanDiff/(60*60*1000*24)*1);

var doomsDay = new Date(2018,5,25);
var doomDiff = date - doomsDay;
var doomDays = -Math.floor(doomDiff/(60*60*1000*24)*1);

// say if Nanobar is open
if ((date - doomsDay) >= 0) {document.getElementById("svar1").innerHTML = noWord + ", men den genopstår i Picobar!";}
else if (dato == 0 || dato == 6) {document.getElementById("svar1").innerHTML = yesWord1 + ", husk studiekort i weekenden.";}
else if (1700 <= time || time <= 700) {document.getElementById("svar1").innerHTML = yesWord1 + ", husk studiekort efter kl. 17.";}
else {document.getElementById("svar1").innerHTML = yesWord1 + ".";}

// tell days since cleaning
document.getElementById("q2").innerHTML = "Dage siden sidste hovedrengøring: " + cleanDays;

// tell days until Nanobar is closed (for now)
if (doomDays > 0) {document.getElementById("q3").innerHTML = "Dage til at Nanobar lukker (for nu): " + doomDays + ".";}
else {document.getElementById("q3").remove();}

// solve quantum mechanics
document.getElementById("svar3").innerHTML = catAnswer + ".";


