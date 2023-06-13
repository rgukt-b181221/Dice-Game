var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimg="dice"+randomNumber1+".png";
var imgg1="images/"+randomimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgg1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimg2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);

if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 won the game";

}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Game Draw";
}
else{
    document.querySelector("h1").innerHTML="Player1 won the game";

}