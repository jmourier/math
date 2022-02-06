
let time = 10;


function go()
{
  let timeDisplay = document.getElementById("timeDisplay");
  timeDisplay.hidden = false;
  setInterval(function(){
    time-=1;
    timeDisplay.innerHTML = "Temps restant : " + timeLeft;
  },1000)
  
  
}
