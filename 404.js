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




//
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

//$(function(){
    var randx = Math.random()*2-1
    var randy = Math.random()*2-1
    var x = 0;
    var y = 0;
    setInterval(function(){
        x += randx
        y += randy
        document.body.style.backgroundPosition = `${x}px ${y}px`
        document.getElementById('404').style.backgroundPosition = `${x}px ${y}px`
    }, 10);
//})