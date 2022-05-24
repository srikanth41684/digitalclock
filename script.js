function time(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minuts");
    var seconds = document.getElementById("seconds");
    var ampm = document.getElementById("am_pm");

    var time = new Date()

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";

    if(hrs==0){
        hrs = 12;
    }
    if(hrs>12){
        hrs = hrs-12;
        am_pm = "PM";
    }
    if(hrs<10){
        hrs = "0" + hrs;
    }

    if(mins<10){
        mins = "0" + mins;
    }
    if(secs<10){
        secs = "0" + secs;
    }

    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    ampm.innerText=am_pm;
}

var oneseconds = 1000;
setInterval(time, oneseconds);


// function none(){
//     const divs = document.getElementsByClassName("div1").style.display = "none";
// }
// none();

function setTime(){
    const wakeup = document.getElementById("wake-uptime").value;
    const b = document.getElementById("lunch-time").value;
    const c = document.getElementById("nap-time").value;
    const d = document.getElementById("night-time").value;

    const hourr = new Date().getHours();


    if(wakeup==hourr){
        document.getElementById("set-greetings").innerText="Good Morning..!";

        document.getElementById("doing-option").innerText = "Wake Up..!";

        document.getElementById("changing-images").style.backgroundImage = "url(./morning-image.jpg)";
    }
        
    if(b==hourr){
        document.getElementById("set-greetings").innerText="Good Afternoone..!";

        document.getElementById("doing-option").innerText = "Let's Have Some Lunch..!";

        document.getElementById("changing-images").style.backgroundImage = "url(./afternoone-image.jpg)";
    }

    if(c==hourr){
        document.getElementById("set-greetings").innerText="Good Evening..!";

        document.getElementById("doing-option").innerText = "Let's Have Some Tea..!";

        document.getElementById("changing-images").style.backgroundImage = "url(./evening-image.jpg)";
    }

    if(d==hourr){
        document.getElementById("set-greetings").innerText="Good Night..!";

        document.getElementById("doing-option").innerText = "Close Your Eyes and Go To Sleep..!";

        document.getElementById("changing-images").style.backgroundImage = "url(./sleeping-image.jpg)";
    }

    let entry1 = document.getElementById("wake-uptime");
    let updatime1 = entry1.options[entry1.selectedIndex].innerText;
    document.getElementById("timing1").innerText = updatime1;
    document.getElementById("wt").style.visibility = "visible";

    let entry2 = document.getElementById("lunch-time");
    let updatime2 = entry2.options[entry2.selectedIndex].innerText;
    document.getElementById("timing2").innerText = updatime2;
    document.getElementById("lt").style.visibility = "visible";

    let entry3 = document.getElementById("nap-time");
    let updatime3 = entry3.options[entry3.selectedIndex].innerText;
    document.getElementById("timing3").innerText = updatime3;
    document.getElementById("tt").style.visibility = "visible";

    let entry4 = document.getElementById("night-time");
    let updatime4 = entry4.options[entry4.selectedIndex].innerText;
    document.getElementById("timing4").innerText = updatime4;
    document.getElementById("nt").style.visibility = "visible";
}