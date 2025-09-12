document.addEventListener('DOMContentLoaded', function(){
    
    let contentCount = 0; // 전체 카운트 초기값(초기화)

    init(); // 전체 모듈 실행

    // ###### 전체 모듈 실행 함수 ######
    function init(){
        setupElements();
        reloadScrollTop();
        mouseWheelEvent();
        drawBorderSVG();
        titleScrollTrigger();
        gnbBtnClickEvent();
        topBtnClick();
        aboutThmbnail();
        aboutInfoText();
        skillCardShow();
        skillCardClick();
        projectSwiper();
        designSwiper();
        designItemClick();
        contactTextShow();
        contactListShow();
        openBgDelete();
    }

    // ###### DOM 요소 ######
    function setupElements(){
        header = document.querySelector('header'); // 헤더
        footer = document.querySelector('footer'); // 푸터
        gnb = document.querySelector('nav.gnb'); // GNB 네비게이션
        gnbMenus = document.querySelectorAll('nav.gnb ul li span'); // GNB 메뉴 
        gnbBtns = document.querySelector('.gnb-responsive button'); // GNB 메뉴 버튼
        gnbIcons = document.querySelectorAll('.gnb-responsive svg'); // GNB 반응형 아이콘
        openBg = document.querySelector('.opening-container'); // 인트로 애니메이션 화면
        topBtn = document.querySelector('.top-btn'); // 최상단 이동 TOP BUTTON
        container = document.querySelector('.main-container'); // 메인 콘테이너
        sections = document.querySelectorAll('section'); // 여러 섹션
        sectionTitles = document.querySelectorAll('.menu-inner h2 span'); // 여러 섹션 타이틀(h2)
        sectionSVGs = document.querySelectorAll('svg.background rect.border'); // 섹션 SVG.
        aboutThum = document.querySelector('.profile.overview .thum'); // ABOUT섹션 썸네일.
        aboutTexts = document.querySelectorAll('.profile.introduce [class*=-info]'); // ABOUT섹션 텍스트들.
        skillWraps = document.querySelectorAll('.skill-card-container [class*=-wrap]'); // SKILL섹션 카드묶음.
        skillCards = document.querySelectorAll('.card-wrap .card'); // SKILL섹션 스킬카드.
        skillInfos = document.querySelectorAll('.info-wrap .info'); // SKILL섹션 스킬정보.
        hoverTexts = document.querySelectorAll('.card .card-hover'); // SKILL섹션 마우스오버문구.
        designitems = document.querySelectorAll('.design-list .design-card'); // DESIGN섹션 디자인 배너 아이템.
        designPopups = document.querySelectorAll('.banner-wrap .banner'); // DESIGN섹션 상세이미지 팝업.
        designCloseBtns = document.querySelectorAll('.banner .close-btn'); // DESIGN섹션 상세이미지 팝업 닫기버튼.
        designPopupBg = document.querySelector('.banner-wrap'); // DESIGN섹션 상세이미지 팝업배경.
        contactTitles = document.querySelectorAll('.contact-title span'); // CONTACT섹션 타이틀 문구.
        contactObjects = document.querySelectorAll('ul.contact-wrap li.contact-list'); // CONTACT섹션 리스트.
        scrollTargets = [...sections, footer]; // 사이트의 전체 타겟 섹션들(헤더빼고).
        targetCount = scrollTargets.length; // 전체 타켓 섹션의 길이값.
    }

    // ###### GSAP 객체 모음 ######
    function gsapModules(){
        const fadeEffect = {
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
        }

        return {fadeEffect};
    }

    // ## 페이지 재로드되면 페이지 최상단으로 이동. ##
    function reloadScrollTop(){
        setTimeout(() => {
            window.scrollTo({top:0});
        }, 100);
    }
    // ## 마우스 휠 스크롤할 때 한 섹션마다 부드럽게 이동. ##
    function mouseWheelEvent(){
        Observer.create({
            target: window,
            type: 'wheel,scroll',
            onUp: () => {
                gotoSection(contentCount - 1);
            },
            onDown: () => {
                gotoSection(contentCount + 1);
            },
            tolerance: 300,
            preventDefault: true
        });
    };
    // ## 4.5초(4500밀리초)후 인트로 애니메이션 화면 DISPLAY NONE(가리기) ##
    function openBgDelete(){
       setTimeout(()=>{
           openBg.style.display = 'none';
       }, 4500)
    }
    // 섹션 카운트 고정값에 따라서 섹션 이동.
    function gotoSection(target){
        if(target < 0 || target >= targetCount) return;

        contentCount = target;
        console.log(contentCount);
        headerBgChange(); // 처음화면에서 벗어났을시, 헤더 배경색 변경.
        gnbTextColorChange(); // 처음화면에서 벗어났을시, GNB 글자색 변경.
        topBtnShow(); // 처음화면에서 벗어났을시, TOP BUTTON 노출.

        gsap.to(window, {
        duration: 0.5,
        scrollTo: {
            y: scrollTargets[target],
            autoKill: false
        }
        
    });
    }
    // ## 섹션 스크롤이 감지되면 타이틀 문구 이동. ##
    function titleScrollTrigger(){
        sectionTitles.forEach((title)=>{
            gsap.to(title,{
                scrollTrigger:{
                    trigger: title,
                    start: "top 100%",
                    toggleClass:"active",
                }
            })
        })
    }
    // ## SVG 테두리 그리기 ##
    function drawBorderSVG(){
        sectionSVGs.forEach((svg)=>{
            gsap.to(svg,{
                scrollTrigger:{
                    trigger: svg,
                    start: "top 60%",
                    end: "bottom 20%",
                    onEnter: ()=> {svg.style.strokeDashoffset = '1000'},
                    onLeave: ()=> {svg.style.strokeDashoffset = '4000'},
                    onEnterBack: ()=> {svg.style.strokeDashoffset = '1000'},
                    onLeaveBack: ()=> {svg.style.strokeDashoffset = '4000'},
                }
            })
        })
    }
    // 처음화면에서 벗어났을시, TOP BUTTON 노출
    function topBtnShow(){
        const isScrollDown = contentCount > 0 ? topBtn.style.transform = 'translate(-40%, -40%)' : topBtn.style.transform = 'translate(100%, -40%)';
        return {isScrollDown};
    }
    // TOP BUTTON 클릭시, 최상단으로 이동
    function topBtnClick(){
        topBtn.addEventListener('click', () => {
            contentCount = 0;
            gotoSection(contentCount);
        })
    }

    // 처음화면에서 벗어났을시, HEADER 배경색 변경
    function headerBgChange(){
        const isScrollDown = contentCount > 0 ? header.style.backgroundColor = 'white' : header.style.backgroundColor = 'transparent';
        return {isScrollDown};
    }
    // 처음화면에서 벗어났을시, GNB 글자색 변경
    function gnbTextColorChange(){
        gnbMenus.forEach((menu, index) => {
            const isScrollDown = contentCount > 0 ? gnbMenus[index].style.color = '#333' : gnbMenus[index].style.color = '#fff';
            return {isScrollDown};
        })
    }
    // ## GNB 메뉴클릭시 해당섹션으로 스크롤 이동. ##
    function gnbBtnClickEvent(){
        gnbMenus.forEach((menu, index)=>{
            menu.addEventListener('click', function(){
                const menus = Array.from(gnbMenus);
                contentCount = menus.findIndex(target => target === gnbMenus[index]);
                gotoSection(contentCount + 1);
            });
        })
    }

    // ## ABOUT 썸네일 ##
    function aboutThmbnail(){
        const fadeText = gsapModules();
        gsap.to(aboutThum,{
            opacity:1,
            scrollTrigger:{
                trigger: aboutThum,
                ...fadeText.fadeEffect
            }
        })
    }
    // ## ABOUT 소개문구 ##
    function aboutInfoText(){
        const fadeText = gsapModules();
        aboutTexts.forEach((text)=>{
            gsap.fromTo(text,
                {opacity: 0},
                {
                    opacity: 1,
                    scrollTrigger:{
                        trigger:text,
                        ...fadeText.fadeEffect,
                    }
                }
            )
        })
    }

    // ## SKILLS 스킬콘텐츠 ##
    function skillCardShow(){
        const fadeWrap = gsapModules();
        skillWraps.forEach((wrap)=>{
            gsap.fromTo(wrap,
                {opacity: 0},
                {
                    opacity: 1,
                    scrollTrigger:{
                        trigger:wrap,
                        ...fadeWrap.fadeEffect,
                    }
                }
            )
        })
    }
    // ## SKILLS 스킬카드클릭 ##
    function skillCardClick(){
        skillCards.forEach((card, index)=>{
            card.addEventListener('click', () => skillCardActive(index));
        })
        skillInfos.forEach((info, index)=>{
            info.addEventListener('click', () => skillCardActive(index));
        })
    }
    // SKILLS 클릭시 active 추가
    function skillCardActive(index){
        skillCards[index].classList.toggle('active');
        skillInfos[index].classList.toggle('active');
        hoverTexts[index].classList.toggle('active');
    }

    // ## PROJECTS SWIPER 함수 ##
    function projectSwiper(){
        const projectSwiper = new Swiper('.project-list-wrap.swiper', {
            direction: 'horizontal',
            loop: true,
            pagination: false,
            navigation:{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
        })

        return {projectSwiper}
    }

    // ## DESIGNS SWIPER 함수 ##
    function designSwiper(){
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

        return {bottomSwiper, topSwiper}
    }
    // ## DESIGNS 배너 클릭시 팝업이미지 ##
    function designItemClick(){
        designitems.forEach((item, index) => {
            item.addEventListener('click', () => designItemActive(index));
        })
        designCloseBtns.forEach((btn, index)=>{
            btn.addEventListener('click', () => designRemoveActive(index));
        })
    }
    // DESIGNS 클릭시 active 추가
    function designItemActive(index){
        designPopups[index].classList.add('active');
        designPopupBg.classList.add('active');
    }
    function designRemoveActive(index){
        designPopups[index].classList.remove('active');
        designPopupBg.classList.remove('active');
    }

    // ## CONTACT 문구 FADE
    function contactTextShow(){
        const fadeTitle = gsapModules();
        contactTitles.forEach((title)=>{
            gsap.fromTo(title,
                {opacity:0},
                {
                    opacity: 1,
                    scrollTrigger:{
                        trigger: title,
                        ...fadeTitle.fadeEffect,
                    }
                }
            )
        })
    }
    // ## CONTACT 리스드 FADE
    function contactListShow(){
        const fadeList = gsapModules();
        contactObjects.forEach((list)=>{
            gsap.fromTo(list,
                {opacity:0},
                {
                    opacity: 1,
                    scrollTrigger:{
                        trigger: list,
                        ...fadeList.fadeEffect,
                    }
                }
            )
        })
    }
})