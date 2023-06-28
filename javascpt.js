var a = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var b = Math.floor(Math.random() * a.length) + 1;
var images = "images/dice" + b + ".png";
document.querySelectorAll("img")[0].setAttribute("src", images);

var c = Math.floor(Math.random() * a.length) + 1;
var images1 = "images/dice" + c + ".png";
document.querySelectorAll("img")[1].setAttribute("src", images1);


if (b > c) {
    document.querySelector("h1").innerHTML = "🚩 player 1 win !";
} else if (c > b) {
    document.querySelector("h1").innerHTML = "🚩 player 2 win !";
} else {
    document.querySelector("h1").innerHTML = "The match is Draw";
}