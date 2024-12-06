let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let per = document.getElementById("peroid");

setInterval(function(){
    let currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var peroid = "AM";

    if(hour>12){
        peroid = "PM";
    }
    if(hour>12){
        hour = hour % 12;
    }

    if(hour<10){
        hour = "0"+ hour;
    }
    if(minute<10){
        minute = "0"+ minute;
    }
    if(second<10){
        second = "0"+ second;
    }

    hrs.innerHTML = hour;
    min.innerHTML = minute;
    sec.innerHTML = second;
    per.innerHTML = peroid;

},1000)


