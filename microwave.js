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