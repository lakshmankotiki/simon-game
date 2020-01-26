var gamePattern = [];
var colors = ['red', 'blue', 'green', 'yellow'];
var levelTitle = document.querySelector('#level-title');

function nextSequence() {

}

//random number generate b/w 0 and 3
function randomNum() {
    return Math.floor(Math.random() * (4 - 0) + 0);
}

//to get random chosen color using random number everytime
var randomChosenColor = colors[randomNum()];
console.log(randomChosenColor);

gamePattern.push(randomChosenColor);

var audioFile = new Audio();
switch(randomChosenColor) {
    case "red":
        $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        audioFile.src = 'sounds/red.mp3';
        audioFile.play();
        break;
    case "blue":
        $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        audioFile.src = 'sounds/blue.mp3';
        audioFile.play();
        break;
    case "green":
        $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        audioFile.src = 'sounds/green.mp3';
        audioFile.play();
        break;
    case "yellow":
        $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        audioFile.src = 'sounds/yellow.mp3';
        audioFile.play();
        break;
}