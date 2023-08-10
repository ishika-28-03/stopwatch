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
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        } if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }
        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        } if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }
        var hrs=hr;
        var ms=min;
        var secs=sec;
        var counts=count;

        if(hr<10){
            hrs="0"+hr;
        }
        if(min<10){
            ms="0"+min;
        }if(sec<10){
            secs="0"+sec;
        }if(count<10){
            counts="0"+count;
        }


        document.getElementById("hr").innerHTML=hrs;
        document.getElementById("min").innerHTML=ms;
        document.getElementById("sec").innerHTML=secs;
        document.getElementById("count").innerHTML=counts;
        


        setTimeout("stopwatch()", 10);
    }
}
