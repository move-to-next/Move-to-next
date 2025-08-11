window.addEventListener('DOMContentLoaded', () => {
    window.alert("해당 페이지는 PC사이즈 기준(1920 x 1080)으로 우선 작업되어, 추후 모바일 및 태블릿의 반응형을 추가할 예정으로 양해부탁드립니다.")

    // 접근성을 준수하여 생성한 반응형부재 알림텍스트
    const responsiveAlert = document.createElement('div');

    responsiveAlert.setAttribute('aria-live', 'polite');
    responsiveAlert.setAttribute('aria-atomic', 'true');
    responsiveAlert.style.cssText = `
        position: absolute;
        font-size: 1px;
        width: 1px;
        height: 1px;
        overflow: hidden;
        text-indent: -9999px;
    `;

    responsiveAlert.textContent = "해당 페이지는 PC사이즈 기준(1920 x 1080)으로 우선 작업되어, 추후 모바일 및 태블릿의 반응형을 추가할 예정으로 양해부탁드립니다.";
    document.body.appendChild(responsiveAlert);

    setTimeout(() => {
        document.body.removeChild(responsiveAlert);
    },15000);

    let screenCount = 0;

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
        console.log(pageTop);
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
        screenCount = 0;
    })


    window.addEventListener('wheel', function(el){
        // scroll counting
        if(el.deltaY>0){
            screenCount = Math.min(screenCount + 1, 6);
        }else{
            screenCount = Math.max(screenCount - 1, 0);
        }
        // section scrolling
        if(screenCount == 0){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }else if(screenCount == 1){
            window.scrollTo({
                top: 930,
                behavior: 'smooth'
            })
        }else if(screenCount == 2){
            window.scrollTo({
                top: 1880,
                behavior: 'smooth'
            })
        }else if(screenCount == 3){
            window.scrollTo({
                top: 2800,
                behavior: 'smooth'
            })
        }else if(screenCount == 4){
            window.scrollTo({
                top: 3800,
                behavior: 'smooth'
            })
        }else if(screenCount == 5){
            window.scrollTo({
                top: 4700,
                behavior: 'smooth'
            })
        }else if(screenCount == 6){
            window.scrollTo({
                top: 4852,
                behavior: 'smooth'
            })
        }
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
        screenCount = 1;
    })
    skillGnb.addEventListener('click', function(){
        window.scrollTo({
            top: 1880,
            behavior: 'smooth'
        })
        screenCount = 2;
    })
    projectGnb.addEventListener('click', function(){
        window.scrollTo({
            top: 2800,
            behavior: 'smooth'
        })
        screenCount = 3;
    })
    designGnb.addEventListener('click', function(){
        window.scrollTo({
            top: 3800,
            behavior: 'smooth'
        })
        screenCount = 4;
    })
    contactGnb.addEventListener('click', function(){
        window.scrollTo({
            top: 4700,
            behavior: 'smooth'
        })
        screenCount = 5;
    })


    let slideObserver = new IntersectionObserver((slide) => {
        slide.forEach((element)=>{
            if(element.isIntersecting){
                element.target.style.transform = 'translateX(0%)';
            }
            else{
                element.target.style.transform = 'translateX(-100%)';
            }
        })
    })
    let fadeObserver = new IntersectionObserver((fade) => {
        fade.forEach((element)=>{
            if(element.isIntersecting){
                element.target.style.opacity = '1';
            }else{
                element.target.style.opacity = '0';
            }
        })
    })
    let borderObserver = new IntersectionObserver((about) => {
        about.forEach((element)=>{
            if(element.isIntersecting){
                element.target.style.strokeDashoffset = '1000';
            }else{
                element.target.style.strokeDashoffset = '4000';
            }
        })
    })

    let menuTitle = document.querySelectorAll('.menu-inner h2 span');
    slideObserver.observe(menuTitle[0]);
    slideObserver.observe(menuTitle[1]);
    slideObserver.observe(menuTitle[2]);
    slideObserver.observe(menuTitle[3]);
    slideObserver.observe(menuTitle[4]);


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
    fadeObserver.observe(skillObject[0]);
    fadeObserver.observe(skillObject[1]);
    fadeObserver.observe(designObject[0]);
    fadeObserver.observe(designObject[1]);
    fadeObserver.observe(contactObject[0]);
    fadeObserver.observe(contactObject[1]);
    fadeObserver.observe(contactObject[2]);


    let aboutBorder = document.querySelectorAll('.profile svg.background rect.border');
    let skillBorder = document.querySelector('.skill-card-container svg.background rect.border');
    borderObserver.observe(aboutBorder[0]);
    borderObserver.observe(aboutBorder[1]);
    borderObserver.observe(skillBorder);
})