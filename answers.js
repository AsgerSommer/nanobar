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

// extra phrase (should at least be ".")
var extra = ", så længe du spritter af."

// say if Nanobar is open
if (dato == 0 || dato == 6) {document.getElementById("svar1").innerHTML = yesWord1 
	+ extra + "<br><small>Bare husk studiekort i weekenden.</small>";}
else if (1700 <= time || time <= 700) {document.getElementById("svar1").innerHTML = yesWord1 
	+ extra + "<br><small>Bare husk studiekort efter kl. 17.</small>";}
else {document.getElementById("svar1").innerHTML = yesWord1 + extra;}

// tell days since cleaning
// document.getElementById("q2").innerHTML = "Dage siden sidste hovedrengøring: " + cleanDays;

// solve quantum mechanics
document.getElementById("svar3").innerHTML = catAnswer + ".";


