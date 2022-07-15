const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
//* querySelectorAll is used to select all the anchors
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
//* v The space between .header and .contiainer is important ! v
const header = document.querySelector('.header.container');

var vid = document.getElementById("piano");
vid.playbackRate = 0.8;

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// * This sets the header background to change color when scroll;
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor= '#29323c';
    }else{
        header.style.backgroundColor= 'transparent';
    }
});

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})




var player = document.getElementById("player");
const btn = document.querySelector('.about .col-right .player .control .button');
let progress=document.querySelector('.about .col-right .player .info .bar .progress');
let time=document.querySelector('.about .col-right .player .time');

var playpause = function () {
    btn.classList.toggle("paused");
    if (player.paused){
        player.play();
    }else{
        player.pause();
    }
}
btn.addEventListener('click', playpause )

player.ontimeupdate = function() {
    let ct = player.currentTime;
    time.innerHTML = timeFormat(ct);
    //proress
    let duration = player.duration;
    prog = Math.floor((ct*100)/duration);
    progress.style.setProperty("--progress",prog + "%");
}

function timeFormat(ct){
    minutes=Math.floor(ct/60);
    seconds=Math.floor(ct%60);

    if(seconds<10){
        seconds="0"+seconds;
    }
    return minutes+":"+seconds;
}
// TODO: make scrolling smoother (https://css-tricks.com/snippets/jquery/smooth-scrolling/)