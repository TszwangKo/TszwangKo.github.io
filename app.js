const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
//* querySelectorAll is used to select all the anchors
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
//* v The space between .header and .contiainer is important ! v
const header = document.querySelector('.header.container');

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