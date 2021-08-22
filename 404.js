var coolString = [
    'why are you entering random links',
    'if you got here from a link other than the homepage, tell me with the discord tag on the external links page',
    'where are you trying to go',
    'i think you\'re in an invalid page',
    '405',
    'what',
]
var randomNumber = Math.floor(Math.random()*coolString.length);
document.getElementById("string").innerHTML = coolString[randomNumber]

var uncoolString = [
    'Invalid Link',
    '404',
    'Not Found',
    'NULL',
    'Unknown',
    'Where are we?',
]
var randomNumber = Math.floor(Math.random()*uncoolString.length);
document.getElementById("stwing").innerHTML = uncoolString[randomNumber]




//FUCK
function playfart(){
    var audio = new Audio("sounds/Firework.ogg");
    audio.volume = 0.2
    audio.play();
}

function playarg(source, volume){
    var audio = new Audio(source);
    audio.volume = volume||1
    audio.play();
}