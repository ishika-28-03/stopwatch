var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;

function start(){
    timer=true;
    stopwatch();

}
function stop(){
    timer=false;
}
function reset(){

}
function stopwatch(){
    if(timer=="true"){
        count=count+1;
        document.getElementById("count").innerHTML=count;

        setTimeout("stopwatch()", 10);
    }
}
