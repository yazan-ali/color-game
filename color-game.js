var numSquers=6;
var colors=generatRandomColor(numSquers);
var colorDisplay=document.getElementById("colorDisplay")
var h1=document.querySelector("h1")
var hard=document.querySelector("#hard")
var easy=document.querySelector("#easy")
var result=document.getElementById("result")
var reset=document.getElementById("reset")
var random=Math.floor(Math.random()*colors.length)
var pickedColor=PickedColor();
colorDisplay.textContent=pickedColor;
var squares=document.querySelectorAll(".square");

reset.addEventListener("click", function(){
colors=generatRandomColor(numSquers);
pickedColor=PickedColor();
colorDisplay.textContent=pickedColor;	
for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor=colors[i];}
reset.textContent="New Colors";
h1.style.backgroundColor="steelblue"
result.textContent=""
})

for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor=colors[i];
squares[i].addEventListener("click",function(){
var clickedColor=this.style.backgroundColor	
if(clickedColor===pickedColor){
result.textContent="Correct!"	
changeColor(clickedColor);
reset.textContent="Play Again?";

}
else{
this.style.backgroundColor="#232323";
result.textContent="Try Again"	

}	
})	
}
function changeColor(color){
for(var i=0; i<colors.length; i++){
squares[i].style.backgroundColor=color;	
}	
h1.style.backgroundColor=color;
}
function PickedColor(){
var random=Math.floor(Math.random()*colors.length)
return colors[random];	
}

function generatRandomColor(num){
var arr=[];	
for(var i=0; i<num; i++){
arr.push(randomColor());

}
return arr;	
}

function randomColor(){
var red=Math.floor(Math.random()*256);	
var green=Math.floor(Math.random()*256);	
var blue=Math.floor(Math.random()*256);	
return "rgb("+red+", "+green+", "+blue+")"
}

hard.addEventListener("click",function(){
numSquers=6	
hard.classList.add("selected")
easy.classList.remove("selected")
colors=generatRandomColor(numSquers);
pickedColor=PickedColor();
colorDisplay.textContent=pickedColor;
for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor=colors[i];	
squares[i].style.display="block"	
}
})
easy.addEventListener("click",function(){
numSquers=3	
easy.classList.add("selected")
hard.classList.remove("selected")
colors=generatRandomColor(numSquers);
pickedColor=PickedColor();
colorDisplay.textContent=pickedColor;
for(var i=0; i<squares.length; i++){
if(colors[i]){
squares[i].style.backgroundColor=colors[i];	
}
else{
squares[i].style.display="none"	
}
}
})