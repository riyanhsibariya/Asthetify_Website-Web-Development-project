const wrapper = document.querySelector('.wrapper');
const catagories = document.querySelector('.catagories');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
if(!menuOpen){
    menuBtn.classList.add('open');
     catagories.classList.add('active-popup');
    menuOpen = true;
} else {
    menuBtn.classList.remove('open');
     catagories.classList.remove('active-popup');
    menuOpen = false;
}
})

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');


});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});





