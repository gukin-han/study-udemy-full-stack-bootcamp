var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImage1 = "./images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImage2 = "./images/dice" + randomNumber2 + ".png"

var header = document.querySelector("h1");
header.textContent = whoIsWinner(randomNumber1, randomNumber2);

document.querySelector("img.img1").src = randomImage1;
document.querySelector("img.img2").src = randomImage2;

function whoIsWinner(randomNumber1, randomNumber2) {
    if (randomNumber1 > randomNumber2) {
        return "🚩Player 1 Wins"
    } else if (randomNumber1 < randomNumber2) {
        return "Player 2 Wins🚩"
    } else {
        return "Draw!"
    }
}