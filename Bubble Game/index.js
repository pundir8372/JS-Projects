var Timer=10;
var Score=0;
var hitValue;
function makeBubble(){
var clutter=""
for(let i=1; i<=140; i++){
  var random=parseInt(Math.random()*100);
  clutter+=`<div class="Bubble">${random}</div>`;
}
document.querySelector("#panel-Bottom").innerHTML=clutter;
}
function setTimer(){
  var timerInterval=setInterval(()=>{
    if(Timer > 0){
      Timer--;
      document.querySelector("#timerVal").textContent=Timer;
    }
    else{
      clearInterval(timerInterval);
      let gameOver=document.querySelector("#panel-Bottom")
      gameOver.innerHTML="<h1>Game Over</h1>";
    }
  },1000)
}
function Hit(){
   hitValue=parseInt(Math.random()*100);
  document.querySelector("#hit-Box").textContent=hitValue;
}
function increaseScore(){
  Score +=10;
  document.querySelector("#scoreVal").textContent=Score;
}
document.querySelector("#panel-Bottom").addEventListener("click",(e)=>{
  var clickedNum=Number(e.target.textContent);
  if(clickedNum === hitValue){
    increaseScore();
    makeBubble();
    Hit();
    
  }  
})
makeBubble();
setTimer();
Hit();
