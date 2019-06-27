var randomNumber1=generateNumber();
var randomNumber2=generateNumber();
var img1=document.querySelector(".img1");
var img2=document.querySelector(".img2");
var title=document.getElementsByTagName("h1")[0];

img1.setAttribute("src", "images/dice"+randomNumber1+".png");
img2.setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2) title.innerHTML="🚩Player 1 wins!";
else if(randomNumber1===randomNumber2) title.innerHTML="Draw!";
else title.innerHTML="Player 2 wins!🚩";

function generateNumber(){
  return Math.floor(Math.random()*6)+1;
}
