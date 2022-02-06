
let time = 10;
let timeInterval;
let score = 0;
let maxScore = 0;
let goodAnswer = 0;

window.onload = function()
{
  scoreSaved = localStorage.getItem("maxScore");
  if (scoreSaved != undefined) maxScore = scoreSaved;
  document.getElementById("maxScore").innerHTML = "Ton meilleur score : "+ maxScore;
}


function go()
{
  
  nQuestion();
  document.getElementById("goBtn").disabled = true;
  let timeDisplay = document.getElementById("timeDisplay");
  timeDisplay.hidden = false;
  timeInterval = setInterval(function(){
    time-=1;
    timeDisplay.innerHTML = "Temps restant : " + time;
    if (time == 0)
    {
      clearInterval(timerInterval);
      document.getElementById("x1").disabled = true;
      document.getElementById("x2").disabled = true;
      document.getElementById("x3").disabled = true;
      document.getElementById("x4").disabled = true;
    }
  },1000)  
}

function nQuestion(){
    let AddOperation = document.getElementById("operation");
    let number = Math.floor(Math.random() * 11);
    goodAnswer = number+6;
    operation.innerHTML = number + "+ 6 ="; 
    
    //reponse
    let badAnswer1 = Math.floor(Math.random() * 11)+6;
    let badAnswer2 = Math.floor(Math.random() * 11)+6;
    let badAnswer3 = Math.floor(Math.random() * 11)+6;
    let badAnswer4 = Math.floor(Math.random() * 11)+6;
    
    document.getElementById("x1").innerHTML = badAnswer1;
    document.getElementById("x2").innerHTML = badAnswer2;
    document.getElementById("x3").innerHTML = badAnswer3;
    document.getElementById("x4").innerHTML = badAnswer4;
    
    
    let goodAnswerTab = Math.floor(Math.random() * 4)+1;
    let goodAnswerId ="x" + goodAnswerTab;
    document.getElementById(goodAnswerId).innerHTML = goodAnswer;
    
  }
  function checkAnswer(buttonIndex)
  {
   let  answer = document.getElementById("x" + buttonIndex).innerHTML;
   if (answer == goodAnswer) score +=1;
   document.getElementById("actuScore").innerHTML = "Ton score :" + score;
   if (score > maxScore) maxScore = score;
   document.getElementById("maxScore").innerHTML = "Ton meilleur score  :" + maxScore;
   
   nQuestion(); 
    
  }
