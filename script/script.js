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

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: false,
    navigation:{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
})

let header = document.querySelector('header');
window.addEventListener('scroll', function(){
    let pageTop = document.documentElement.scrollTop;
    console.log(pageTop);
    if(pageTop == 300){
        header.style.backgroundColor = '#fff';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
})
