var n=Math.random();
n=n*6;
n=Math.floor(n);
let randomDiceImage1 = "dice" + n + ".png"; //dice1.png - dice6.png
var randomImageSorce= "images/" + randomDiceImage1;
var image1=document.querySelectorAll  ("img") [0]; // 
image1.setAttribute("src", randomImageSorce);