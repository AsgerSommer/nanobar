var date = new Date();
var dato = date.getDay();
var time = date.getHours()*100 + date.getMinutes()

var yesWords = ["Ja", "Yeps", "Helt klart", "Altid", "Jepper", "Tjek", "True", "Yeah", "Jep", "Yes"];
var noWords = ["Nej", "Næh", "Nope", "Aldrig", "Niksen biksen", "Næppe", "Helt klart ikke", "No", "Nah", "False"];
var catAnswers = ["Ja", "Nej"];

var yesWord = yesWords[Math.floor(Math.random() * yesWords.length)];
var noWord = noWords[Math.floor(Math.random() * noWords.length)];
var catAnswer = catAnswers[Math.floor(Math.random() * catAnswers.length)];

if (dato == 0 || dato == 6) {document.getElementById("svar1").innerHTML = yesWord + ", husk studiekort i weekenden.";}
else if (1700 <= time || time <= 700) {document.getElementById("svar1").innerHTML = yesWord + ", husk studiekort efter kl. 17.";}
else {document.getElementById("svar1").innerHTML = yesWord + ".";}

document.getElementById("svar2").innerHTML = ".." + noWord+".";
document.getElementById("svar3").innerHTML = catAnswer+".";