


function displayTime() {
     
    let time = new Date();
    let hrs = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let mins = time.getMinutes() < 10 ? "0" + time.getMinutes()  : time.getMinutes();
    let secs = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();


    document.getElementById('hours').innerText = hrs;
    document.getElementById('minutes').innerText = mins;
    document.getElementById('seconds').innerText = secs;
    let range = document.getElementById('session');

    if(hrs > 12){
        hrs -= 12;
    }

    if(hrs >= 12){
        range.innerText = 'PM';
    }else{
        range.innerText = 'AM';
    }
  
}
setInterval(displayTime, 10);