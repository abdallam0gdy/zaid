var birthday_massge = document.getElementById("birthday-massge")
var heart = document.getElementById("heart")
// Set the date we're counting down to
var countDownDate = new Date("Aug 24, 2024 00:00:00").getTime(); 

//counter
var counter = document.getElementById("countdown")

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
counter.innerHTML = days + " يوم " + hours + " ساعه "
+ minutes + " دقيقه " + seconds + " ثانيه ";
// console.log();
// if(days > 0){
//     counter.innerHTML = days + " يوم " + hours + " ساعه "
//     + minutes + " دقيقه " + seconds + " ثانيه ";
// }else{
//     counter.innerHTML = hours + " ساعه "
//     + minutes + " دقيقه " + seconds + " ثانيه ";
// }if(hours > 0){
//     counter.innerHTML = hours + " ساعه "
//     + minutes + " دقيقه " + seconds + " ثانيه ";
// }else{
//     counter.innerHTML = minutes + " دقيقه " + seconds + " ثانيه ";
// }if(minutes > 0 ){
//     counter.innerHTML = minutes + " دقيقه " + seconds + " ثانيه ";
// }else{
//     counter.innerHTML = seconds + " ثانيه ";
// }

// If the count down is finished, write some text

if (distance < 0) {
clearInterval(x);
counter.innerHTML = "تم فتح التسجيل";
birthday_massge.style.display = "ruby";
heart.style.display = "none";
}
}, 1000);


// code for choose winer
const winner = document.getElementById("birthday-massge");
var myModal = new bootstrap.Modal(document.getElementById('modal'), {
    keyboard: false
})

winner.addEventListener('click' , function(){
    loadercotaner.style.display = 'none'
    setTimeout(function(){myModal.show();}, 1000 * 1);
}
);


var btnclose = document.getElementById('btnclose')
btnclose.addEventListener('click' , function(){
    loadercotaner.style.display = 'none';
    // setTimeout(function(){myModal.show();}, 1000 * 1);
})

winner.addEventListener('click' , function(){
    const defaults = {
        spread: 3600,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 50,
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
        
    };
    
    confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
    });
    
    confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
    });
    
    confetti({
        ...defaults,
        particleCount: 20,
        scalar: 4,
    });;
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
    
}
);


// $('heart').click(function() {
//     $(this).toggleClass("active");
// });