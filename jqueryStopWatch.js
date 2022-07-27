$(function(){
    var mode=false;
    var lapCount=0;
    var clockCount=0;
    var event_for_clock;
    var event_for_lap;
    var numberOfLap=0;
    hideButtonsExcept("#start_button","#lap_button");
    $("#start_button").click(function(){
        mode=true;
        
        event_for_clock=setInterval(function(){
            clockCount++;
            document.getElementById("clock_second").innerHTML=operateValue(Math.floor(clockCount%60));
            document.getElementById("clock_minute").innerHTML=operateValue(Math.floor(clockCount/60));
            document.getElementById("clock_hour").innerHTML=operateValue(Math.floor(clockCount/3600));
        },1000);
        event_for_lap=setInterval(function(){
            lapCount++;
            document.getElementById("lap_second").innerHTML=operateValue(Math.floor(lapCount%60));
            document.getElementById("lap_minute").innerHTML=operateValue(Math.floor(lapCount/60));
            document.getElementById("lap_hour").innerHTML=operateValue(Math.floor(lapCount/3600));

        },1000);
        hideButtonsExcept("#stop_button","#lap_button");

    });
    $("#resume_button").click(function(){
        mode=true;
        
        event_for_clock=setInterval(function(){
            clockCount++;
            document.getElementById("clock_second").innerHTML=operateValue(Math.floor(clockCount%60));
            document.getElementById("clock_minute").innerHTML=operateValue(Math.floor(clockCount/60));
            document.getElementById("clock_hour").innerHTML=operateValue(Math.floor(clockCount/3600));
        },1000);
        event_for_lap=setInterval(function(){
            lapCount++;
            document.getElementById("lap_second").innerHTML=operateValue(Math.floor(lapCount%60));
            document.getElementById("lap_minute").innerHTML=operateValue(Math.floor(lapCount/60));
            document.getElementById("lap_hour").innerHTML=operateValue(Math.floor(lapCount/3600));

        },1000);
        hideButtonsExcept("#lap_button","#stop_button");

    });
    $("#reset_button").click(function(){
        location.reload();
    });

    $("#stop_button").click(function(){
        mode=false;
        clearInterval(event_for_clock);
        clearInterval(event_for_lap);
        hideButtonsExcept("#resume_button","#reset_button");
    });

    $("#lap_button").click(function(){
        if(mode){
            numberOfLap++;
            var str='<div class="lap_Count">'+'Lap'+numberOfLap+'</div>';
            var num='<div class="num_Count">'+document.getElementById("lap_hour").innerHTML+":"+document.getElementById("lap_minute").innerHTML+":"+document.getElementById("lap_second").innerHTML+'</div>';  
            clearInterval(event_for_lap);
            $('<div id="List">'+str+num+'</div>').appendTo("#lap_count");
            lapCount=0;
            event_for_lap=setInterval(function(){
                lapCount++;
                document.getElementById("lap_second").innerHTML=operateValue(Math.floor(lapCount%60));
                document.getElementById("lap_minute").innerHTML=operateValue(Math.floor(lapCount/60));
                document.getElementById("lap_hour").innerHTML=operateValue(Math.floor(lapCount/3600));
    
            },1000);
           }
    });
    
    function operateValue(x){
        if(x<10) 
            return "0"+x;
        else
            return x;

    };

    function hideButtonsExcept(x,y){
        $(".button").hide();
        $(x).show();
        $(y).show();
      
    }
    

    
})