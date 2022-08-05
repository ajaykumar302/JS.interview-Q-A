//Q1//Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen 
//above button

function but() {
    document.querySelector("h1").innerText ="MERN stack";
}	



//Q3.
////Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second																									

function displayTime (){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById("session");

    if(hrs >=12){
        session.innerHTML ="PM";
    }
    else{
        session.innerHTML ="AM";
    }
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

}
setInterval(displayTime,10);

///Q4.Create an HTML page having content as Hello world and a button named Replace Text.
// When user will click on this button page content should be changed to "Welcome to Elevation academy"																									

function text(){
    document.getElementById("content").innerText = "Welcome to Elevation academy";
}


//Q5.Create an HTML page having content as Hello world and a button named "Hide Text." 
//When user will click on this button hide the "Hello World" text	

$("button").click(function(){
    $("p").hide();
})

