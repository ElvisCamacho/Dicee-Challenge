
// creating a random number from 1 to 6 and round them down with Math.floor and add 1 
//Math.random()*6 -  number between 0 to 5.9999 them we x 6 to change it
//Math.floor(Math.random()*6) - round them down to be hole number
// Math.floor(Math.random()*6) + 1 - add
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) +1;

//using the randomNumber to get the images inside the file
var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

// getting the attributes classes inside the img and setting to the random number images generator
document.querySelector(".img1").setAttribute("src",images1);
document.querySelector(".img2").setAttribute("src",images2);


 if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player-1 Wins!"
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player-2 Wins!🚩"
}
else {
    document.querySelector("h1").innerHTML = "You Draw!";
} 