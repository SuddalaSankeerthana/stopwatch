var seconds =00;
var tens =00;
var minute=00;
var hour=00;
var Outputseconds=document.getElementById("second");
var Outputminute=document.getElementById("min");
var Outputhr=document.getElementById("hr");
var Outputtens=document.getElementById("tens");
var buttonStart=document.getElementById("btn-strt"); 
var buttonStop=document.getElementById("btn-stp");
var buttonReset=document.getElementById("btn-rst");
var Interval;
buttonStart.addEventListener('click',()=>{
  clearInterval(Interval);
  Interval=setInterval(startTimer,10);
});
buttonStop.addEventListener('click',()=>{
  clearInterval(Interval);
});
buttonReset.addEventListener('click',()=>
{
  clearInterval(Interval);
  tens="00";
  seconds="00";
  minute="00";
  hour="00"
  Outputseconds.innerHTML=seconds;
  Outputtens.innerHTML=tens;
  Outputminute.innerHTML=minute;
  Outputhr.innerHTML=hour;
});
function startTimer(){
  tens++;
  if(tens <=9){
    Outputtens.innerHTML="0"+tens;
  }
  if(tens>9){
    Outputtens.innerHTML = tens;
  }
  if(tens > 99){
    seconds++;
    Outputseconds.innerHTML="0"+seconds;
    tens=0;
    Outputtens.innerHTML="0"+tens;
  }
  if(seconds>9)
  {
     Outputseconds.innerHTML=seconds;
      }
  if(seconds>59){
    seconds="00";
    minute++;
    Outputminute.innerHTML="0"+minute;
    Outputsec.innerHTML="00";
    }
    if(minute>59){
      seconds="00";
      minute="00";
      hour++;
      Outputminute.innerHTML=minute;
      Outputhr.innerHTML="0"+hour;
    if(minute>9)
    {
      Outputminute.innerHTML=minute;
    }
    if(hour>9){
      Outputhr.innerHTML=hour;
    }
    }
}














