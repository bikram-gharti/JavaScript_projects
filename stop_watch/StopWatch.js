var time = document.querySelector(".time");

var hrs = 0;
var min = 0;
var sec = 0;
var count = 0;

function start(){
    timer = true;
    watch();
}

function stop(){
    timer = false;
}

function reset(){
    time.innerHTML = "00:00:00:00";
    timer = false;
    count = 0;
    sec = 0;
    min = 0;
    hrs = 0;     
}

function watch(){
    if(timer == true){
        count++;

        if(count == 100){
            sec++;
            count = 0;
        }

        if(sec == 60){
            min++;
            sec = 0;
        }

        if(min == 60){
            hrs++;
            min = 0;
            // sec = 0;
        }

        let countString = count;
        let secString = sec;
        let minString = min;
        let hrsString = hrs;

        if(count<10){
            countString = "0" + countString;
        }

        if(sec<10){
            secString = "0" + secString;
        }

        if(min<10){
            minString = "0" + minString;
        }

        if(hrs<10){
            hrsString = "0" + hrsString;
        }

        time.innerHTML = hrsString + ":" + minString + ":" + secString + ":" + countString;

        setTimeout(watch, 10);
    }
}
