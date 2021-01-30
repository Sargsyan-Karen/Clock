function clock(){
    var hours = document.getElementById('hour');
    var hours = document.getElementById('minutes');
    var hours = document.getElementById('seconds');
    
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

var interval = setInterval(clock,1000);