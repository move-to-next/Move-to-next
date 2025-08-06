let cards = document.querySelectorAll('.card-wrap .card');
let infos = document.querySelectorAll('.info-wrap .info');
let hoverTexts = document.querySelectorAll('.card .card-hover');

function hoverCard(index){
    cards.forEach(card=>{
        card.classList.remove('active');
    })
    infos.forEach(info=>{
        info.classList.remove('active');
    })
    hoverTexts.forEach(text=>{
        text.classList.remove('active');
    })
    hoverTexts[index].classList.add('active');
    cards[index].classList.add('active');
    infos[index].classList.add('active');
}

function leaveCard(index){
    hoverTexts[index].classList.remove('active');
    cards[index].classList.remove('active');
    infos[index].classList.remove('active');
}

cards.forEach((card, index)=>{
    card.addEventListener('mouseover', () => hoverCard(index));
    card.addEventListener('mouseleave', () => leaveCard(index));
})

infos.forEach((info, index)=>{
    info.addEventListener('mouseover', () => hoverCard(index));
    info.addEventListener('mouseleave', () => leaveCard(index));
})

const projectSwiper = new Swiper('.project-list-wrap.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: false,
    navigation:{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
})
const bottomSwiper = new Swiper('.design-list:is(.second,.third,.fifth).swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
    pagination: false,
    navigation: false
})
const topSwiper = new Swiper('.design-list.fourth.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 2500,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
    pagination: false,
    navigation: false
})

let header = document.querySelector('header');
let gnbMenus = document.querySelectorAll('nav.gnb ul li span');
window.addEventListener('scroll', function(){
    let pageTop = document.documentElement.scrollTop;
    let topBtn = document.querySelector('.top-btn');
    gnbMenus.forEach(menu => {
        if(pageTop >= 800){
            header.style.backgroundColor = '#ffffff';
            menu.style.color = '#000';
            topBtn.style.transform = 'translate(-40%, -40%)';
        }
        else{
            header.style.backgroundColor = 'transparent';
            menu.style.color = '#fff';
            topBtn.style.transform = 'translate(100%, -40%)';
        }
    })
})

let openBg = document.querySelector('.opening-container');
setTimeout(()=>{
    openBg.style.display = 'none';
}, 4500)


let topBtn = document.querySelector('.top-btn');
topBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

let bannerBg = document.querySelector('.banner-wrap');
let designCards = document.querySelectorAll('.design-list .design-card');
let banners = document.querySelectorAll('.banner-wrap .banner');
let closeBtns = document.querySelectorAll('.banner .close-btn');

designCards.forEach((card, index) => {
    card.addEventListener('click', function(){
        banners[index].classList.add('active');
        bannerBg.classList.add('active');
    })
})
closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(){
        banners[index].classList.remove('active');
        bannerBg.classList.remove('active');
    })
})

let aboutGnb = document.querySelector('nav.gnb ul li.about');
let skillGnb = document.querySelector('nav.gnb ul li.skill');
let projectGnb = document.querySelector('nav.gnb ul li.project');
let designGnb = document.querySelector('nav.gnb ul li.design');
let contactGnb = document.querySelector('nav.gnb ul li.contact');

aboutGnb.addEventListener('click', function(){
    window.scrollTo({
        top: 926,
        behavior: 'smooth'
    })
})
skillGnb.addEventListener('click', function(){
    window.scrollTo({
        top: 1880,
        behavior: 'smooth'
    })
})
projectGnb.addEventListener('click', function(){
    window.scrollTo({
        top: 2800,
        behavior: 'smooth'
    })
})
designGnb.addEventListener('click', function(){
    window.scrollTo({
        top: 3800,
        behavior: 'smooth'
    })
})
contactGnb.addEventListener('click', function(){
    window.scrollTo({
        top: 4700,
        behavior: 'smooth'
    })
})

// about : 926
// skill : 1880
// project : 2800
// design : 3800
// contact : 4700