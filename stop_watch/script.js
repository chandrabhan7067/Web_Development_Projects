let stopIcon = document.getElementById("stopIcon")
let startIcon = document.getElementById("startIcon")
let restartIcon = document.getElementById("restartIcon")
let displayTime = document.getElementById("displayTime")
let timer = null;

let [hour, minute, second] = [0,0,0]

function stopWatch(){
    second++;
    if(second > 60){
        minute++;
        second = 0;

        if(minute > 60){
            hour++;
            minute = 0;
        }

    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}


function watchStart(){
    // if(timer !== null){
        clearInterval(timer)
    // }

    timer = setInterval(stopWatch, 1000);
}

function watchStop(){
    clearInterval(timer)
}

function watchReset(){
    [hour, minute, second] = [0,0,0]
    displayTime.innerHTML = "0" + hour + ":" + "0" + minute + ":" + "0" + second;
}