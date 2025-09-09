// SCREEN RESPONSIVE
let smallMobileMedia = window.matchMedia("(min-width: 350px) and (max-width: 419px)");
let mobileMedia = window.matchMedia("(min-width: 420px) and (max-width: 767px)");
let tabletMedia = window.matchMedia("(min-width: 768px) and (max-width: 1024px)");
let desttopMedia_LAPTOP = window.matchMedia("screen and (max-width: 1860px)");
let desttopMedia_HD = window.matchMedia("screen and (max-width: 1366px)");
let desttopMedia_FHD = window.matchMedia("screen and (max-width: 1920px)");
let desttopMedia_QHD = window.matchMedia("screen and (max-width: 2560px)");
let desttopMedia_4K = window.matchMedia("screen and (max-width: 3840px)");

let screenCount = 0;

// SKILLS 섹션 카드 부분
let cards = document.querySelectorAll('.card-wrap .card');
let infos = document.querySelectorAll('.info-wrap .info');
let hoverTexts = document.querySelectorAll('.card .card-hover');

// 마우스 오버 동작함수
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
// 마우스 벗어날때 동작함수
function leaveCard(index){
    hoverTexts[index].classList.remove('active');
    cards[index].classList.remove('active');
    infos[index].classList.remove('active');
}
// 토글 동작함수
function toggleCard(index){
    hoverTexts[index].classList.toggle('active');
    cards[index].classList.toggle('active');
    infos[index].classList.toggle('active');
}

// 태블릿 또는 모바일 화면일떄 마우스오버대신 클릭,터치시 동작.
cards.forEach((card, index)=>{
    if(tabletMedia.matches || mobileMedia.matches || smallMobileMedia.matches){
        card.addEventListener('click', () => toggleCard(index));
    }
    else{
        card.addEventListener('mouseover', () => hoverCard(index));
        card.addEventListener('mouseleave', () => leaveCard(index));
    }
})
infos.forEach((info, index)=>{
    info.addEventListener('mouseover', () => hoverCard(index));
    info.addEventListener('mouseleave', () => leaveCard(index));
})


// SWIPER.JS 로직
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


// HEADER 및 GNB DOM요소
let header = document.querySelector('header');
let gnb = document.querySelector('nav.gnb');
let gnbMenus = document.querySelectorAll('nav.gnb ul li span');
let gnbIcons = document.querySelectorAll('.gnb-responsive svg');
let gnbLines = document.querySelectorAll('.gnb-responsive svg line');
let gnbBtn = document.querySelector('.gnb-responsive button');


// 반응형화면의 GNB아이콘 화살표로 변경
let isArrowChanged = false
// 화살표아이콘 변경 함수
function arrowChange(){
    if(!isArrowChanged){
        gnbIcons[0].setAttribute('height', '20');
        gnbIcons[0].setAttribute('viewBox', '0 0 200 1');
        gnbIcons[1].setAttribute('height', '5');
        gnbIcons[1].setAttribute('viewBox', '0 0 200 5');
        gnbIcons[2].setAttribute('height', '20');
        gnbIcons[2].setAttribute('viewBox', '0 0 200 1');
        gnbLines[0].setAttribute('x1', '100');
        gnbLines[0].setAttribute('y2', '200');
        gnbLines[2].setAttribute('x1', '100');
        gnbLines[2].setAttribute('y2', '-200');
        gnb.classList.add('active');
        gnbBtn.classList.add('active');
        isArrowChanged = true;
    }else{
        gnbIcons.forEach((icon, index) => {
            gnbIcons[index].setAttribute('height', '8');
            gnbIcons[index].setAttribute('viewBox', '0 0 200 20');
            gnbLines[index].setAttribute('x1', '0');
            gnbLines[index].setAttribute('y2', '0');
        });
        gnb.classList.remove('active');
        gnbBtn.classList.remove('active');
        isArrowChanged = false;
    }
}
// 반응형 GNB메뉴 클릭시 화살표아이콘 변경 함수 작용.
gnbBtn.addEventListener('click', arrowChange);


// 4.5초(4500밀리초)후 처음 인트로 애니메이션 요소 DISPLAY NONE(가리기)
let openBg = document.querySelector('.opening-container');
setTimeout(()=>{
    openBg.style.display = 'none';
}, 4500)


// TOP BUTTON 클릭 시 상단으로 이동
let topBtn = document.querySelector('.top-btn');
topBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    screenCount = 0;
    isArrowChanged = true;
    arrowChange();
})


// 브라우저 스크롤 다운 시 헤더 색상변경, TOP BUTTON 노출.
function isPageTopTrue(menu, topBtn){
    header.style.backgroundColor = '#ffffff';
    menu.style.color = '#000';
    topBtn.style.transform = 'translate(-40%, -40%)';
    gnbLines.forEach((line, index) => {
        gnbLines[index].setAttribute('stroke', '#333');
    })
    if(tabletMedia.matches || mobileMedia.matches || smallMobileMedia.matches){
        gnb.style.backgroundColor = '#cccccc';
    }
    else{
        gnb.style.backgroundColor = 'transparent';
    }
}
function isPageTopFalse(menu, topBtn){
    gnb.style.backgroundColor = 'transparent';
    header.style.backgroundColor = 'transparent';
    menu.style.color = '#fff';
    topBtn.style.transform = 'translate(100%, -40%)';
    gnbLines.forEach((line, index) => {
        gnbLines[index].setAttribute('stroke', 'white');
    })
    if(tabletMedia.matches || mobileMedia.matches || smallMobileMedia.matches){
        gnb.style.backgroundColor = '#333333';
    }
    else{
        gnb.style.backgroundColor = 'transparent';
    }
}
window.addEventListener('scroll', function(){
    let pageTop = document.documentElement.scrollTop;
    // console.log(pageTop);
    let topBtn = document.querySelector('.top-btn');
    gnbMenus.forEach(menu => {
        if(smallMobileMedia.matches){
            if(pageTop >= 700){
                isPageTopTrue(menu, topBtn);
            }
            else{
                isPageTopFalse(menu, topBtn);
            }
        }
        else if(mobileMedia.matches){
            if(pageTop >= 750){
                isPageTopTrue(menu, topBtn);
            }
            else{
                isPageTopFalse(menu, topBtn);
            }
        }
        else{
            if(pageTop >= 800){
                isPageTopTrue(menu, topBtn);
            }
            else{
                isPageTopFalse(menu, topBtn);
            }
        }
    })
})

let container = document.querySelector('.main-container');
let sections = document.querySelectorAll('section');
let sectionCount = sections.length;
let scrollThreadHold = 300;
let wheelCount = 0;

// 마우스 스크롤 시 각 섹션 별로 카운트 적용 후 부드럽게 넘어가는 로직.
function init(){
    mouseWheelEvent();
}
function mouseWheelEvent(){
    container.addEventListener('wheel',function(e){
        e.preventDefault();

        if(e.deltaY > 0){
            wheelCount += Math.abs(e.deltaY);
        }
        else{
            wheelCount -= Math.abs(e.deltaY);
        }

        if(Math.abs(wheelCount) > scrollThreadHold){
            if(wheelCount > 0){
                gotoSection(screenCount + 1);
            }
            else{
                gotoSection(screenCount - 1);
            }
            wheelCount = 0;
            
            function gotoSection(targetSection){
                targetSection = Math.max(0, Math.min(targetSection, sectionCount - 1));
                screenCount = targetSection;
                console.log(screenCount);
                animateSection();
            }
            function animateSection(){
                const moveY = -screenCount * window.innerHeight;
                gsap.to(container,{
                    y: moveY,
                })
            }
        }
    })
}

init();


// GNB의 메뉴 클릭 시 각 섹션으로 섹션 스크롤링 되며 이동.
let aboutGnb = document.querySelector('nav.gnb ul li.about');
let skillGnb = document.querySelector('nav.gnb ul li.skill');
let projectGnb = document.querySelector('nav.gnb ul li.project');
let designGnb = document.querySelector('nav.gnb ul li.design');
let contactGnb = document.querySelector('nav.gnb ul li.contact');
aboutGnb.addEventListener('click', function(){
    if(smallMobileMedia.matches){
        window.scrollTo({
        top: 705,
        behavior: 'smooth'
        })
    }
    else if(mobileMedia.matches){
        window.scrollTo({
        top: 824,
        behavior: 'smooth'
        })
    }
    else if(tabletMedia.matches){
        window.scrollTo({
        top: 900,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_HD.matches){
        window.scrollTo({
        top: 820,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_LAPTOP.matches){
        window.scrollTo({
        top: 1020,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_FHD.matches){
        window.scrollTo({
        top: 1040,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_QHD.matches){
        window.scrollTo({
        top: 1370,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_4K.matches){
        window.scrollTo({
        top: 2120,
        behavior: 'smooth'
        })
    }
    else{
        window.scrollTo({
        top: 1045,
        behavior: 'smooth'
        })
    }
    screenCount = 1;
    isArrowChanged = true;
    arrowChange();
})
skillGnb.addEventListener('click', function(){
    if(smallMobileMedia.matches){
        window.scrollTo({
        top: 1460,
        behavior: 'smooth'
        })
    }
    else if(mobileMedia.matches){
        window.scrollTo({
        top: 1700,
        behavior: 'smooth'
        })
    }
    else if(tabletMedia.matches){
        window.scrollTo({
        top: 1850,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_HD.matches){
        window.scrollTo({
        top: 1715,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_LAPTOP.matches){
        window.scrollTo({
        top: 2060,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_FHD.matches){
        window.scrollTo({
        top: 2130,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_QHD.matches){
        window.scrollTo({
        top: 2840,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_4K.matches){
        window.scrollTo({
        top: 4260,
        behavior: 'smooth'
        })
    }
    else{
        window.scrollTo({
        top: 2125,
        behavior: 'smooth'
    })
    }
    screenCount = 2;
    isArrowChanged = true;
    arrowChange();
})
projectGnb.addEventListener('click', function(){
    if(smallMobileMedia.matches){
        window.scrollTo({
        top: 2190,
        behavior: 'smooth'
        })
    }
    else if(mobileMedia.matches){
        window.scrollTo({
        top: 2580,
        behavior: 'smooth'
        })
    }
    else if(tabletMedia.matches){
        window.scrollTo({
        top: 2800,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_HD.matches){
        window.scrollTo({
        top: 2550,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_LAPTOP.matches){
        window.scrollTo({
        top: 3070,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_FHD.matches){
        window.scrollTo({
        top: 3170,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_QHD.matches){
        window.scrollTo({
        top: 4240,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_4K.matches){
        window.scrollTo({
        top: 6380,
        behavior: 'smooth'
        })
    }
    else{
        window.scrollTo({
        top: 3165,
        behavior: 'smooth'
    })
    }
    screenCount = 3;
    isArrowChanged = true;
    arrowChange();
})
designGnb.addEventListener('click', function(){
    if(smallMobileMedia.matches){
        window.scrollTo({
        top: 2930,
        behavior: 'smooth'
        })
    }
    else if(mobileMedia.matches){
        window.scrollTo({
        top: 3442,
        behavior: 'smooth'
        })
    }
    else if(tabletMedia.matches){
        window.scrollTo({
        top: 3740,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_HD.matches){
        window.scrollTo({
        top: 3460,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_LAPTOP.matches){
        window.scrollTo({
        top: 4155,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_FHD.matches){
        window.scrollTo({
        top: 4290,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_QHD.matches){
        window.scrollTo({
        top: 5710,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_4K.matches){
        window.scrollTo({
        top: 8590,
        behavior: 'smooth'
        })
    }
    else{
        window.scrollTo({
        top: 4285,
        behavior: 'smooth'
    })
    }
    screenCount = 4;
    isArrowChanged = true;
    arrowChange();
})
contactGnb.addEventListener('click', function(){
    if(smallMobileMedia.matches){
        window.scrollTo({
        top: 3690,
        behavior: 'smooth'
        })
    }
    else if(mobileMedia.matches){
        window.scrollTo({
        top: 4315,
        behavior: 'smooth'
        })
    }
    else if(tabletMedia.matches){
        window.scrollTo({
        top: 4710,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_HD.matches){
        window.scrollTo({
        top: 4283,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_LAPTOP.matches){
        window.scrollTo({
        top: 5150,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_FHD.matches){
        window.scrollTo({
        top: 5320,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_QHD.matches){
        window.scrollTo({
        top: 7100,
        behavior: 'smooth'
        })
    }
    else if(desttopMedia_4K.matches){
        window.scrollTo({
        top: 10670,
        behavior: 'smooth'
        })
    }
    else{
        window.scrollTo({
        top: 3880,
        behavior: 'smooth'
    })
    }
    screenCount = 5;
    isArrowChanged = true;
    arrowChange();
})


// 디자인 섹션의 배너 소개 박스 클릭 시 이벤트 배너가 팝업 창으로 노출. (+ 닫기 버튼 클릭시 닫힘.)
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


// 브라우저 내에 특정 요소의 노출이 감지되면, 동작되어질 로직.
// slideObserver - 노출이 감지되면 좌 -> 우 로 슬라이드 이동.
let slideObserver = new IntersectionObserver((slide) => {
    slide.forEach((element)=>{
        if(element.isIntersecting){
            element.target.style.transform = 'translateX(0%)';
        }
        else{
            element.target.style.transform = 'translateX(-100%)';
        }
    })
});
// ,{
//     threshold: 0.1, // 10%만 보여도 감지됨. 0 = 기본값
//     rootMargin: '50px 0px 50px 0px' // 위,아래 나타나기 50px전부터 감지 // 0px = 기본값
// }

// fadeObserver - 노출이 감지되면 점점 선명해짐.
let fadeObserver = new IntersectionObserver((fade) => {
    fade.forEach((element)=>{
        if(element.isIntersecting){
            element.target.style.opacity = '1';
        }else{
            element.target.style.opacity = '0';
        }
    })
})
// borderObserver - SVG요소의 stroke 속성값을 활용해 보더가 시계방향으로 그려짐.
let borderObserver = new IntersectionObserver((about) => {
    about.forEach((element)=>{
        if(element.isIntersecting){
            element.target.style.strokeDashoffset = '1000';
        }else{
            element.target.style.strokeDashoffset = '4000';
        }
    })
})

// slideObserver 적용할 DOM요소 선택.
let menuTitle = document.querySelectorAll('.menu-inner h2 span');
slideObserver.observe(menuTitle[0]);
slideObserver.observe(menuTitle[1]);
slideObserver.observe(menuTitle[2]);
slideObserver.observe(menuTitle[3]);
slideObserver.observe(menuTitle[4]);

// fadeObserver 적용할 DOM요소 선택.
let contactTitle = document.querySelectorAll('.contact-title span');
let aboutObject = document.querySelectorAll('.profile>div');
let skillObject = document.querySelectorAll('.skill-card-container>div');
let designObject = document.querySelectorAll('.design-wrap>div');
let contactObject = document.querySelectorAll('ul.contact-wrap li.contact-list');
fadeObserver.observe(contactTitle[1]);
fadeObserver.observe(contactTitle[2]);
fadeObserver.observe(aboutObject[0]);
fadeObserver.observe(aboutObject[1]);
fadeObserver.observe(aboutObject[2]);
fadeObserver.observe(aboutObject[3]);
fadeObserver.observe(skillObject[0]);
fadeObserver.observe(skillObject[1]);
fadeObserver.observe(designObject[0]);
fadeObserver.observe(designObject[1]);
fadeObserver.observe(contactObject[0]);
fadeObserver.observe(contactObject[1]);
fadeObserver.observe(contactObject[2]);

// borderObserver 적용할 DOM요소 선택.
let aboutBorder = document.querySelectorAll('.profile svg.background rect.border');
let skillBorder = document.querySelector('.skill-card-container svg.background rect.border');
borderObserver.observe(aboutBorder[0]);
borderObserver.observe(aboutBorder[1]);
borderObserver.observe(skillBorder);