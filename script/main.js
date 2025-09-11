document.addEventListener('DOMContentLoaded', function(){
    let gnb; // GNB 네비게이션
    let gnbMenu; // GNB 네비게이션 메뉴
    let gnbBtn; // GNB 반응형 버튼
    let gnbIcon; // GNB 반응형 버튼 아이콘
    let card; // 스킬 카드
    let info; // 스킬 소개

    let contentCount = 0; // 전체 카운트 초기값

    init();

    // ###### 전체 모듈 실행 함수 ######
    function init(){
        setupElements();
        reloadScrollTop();
        mouseWheelEvent();
        drawBorderSVG();
        titleScrollTrigger();
        aboutThmbnail();
        aboutInfoText();
        // openBgDelete();
    }

    // ###### DOM 요소 ######
    function setupElements(){
        header = document.querySelector('header'); // 헤더
        footer = document.querySelector('footer'); // 푸터
        openBg = document.querySelector('.opening-container'); // 인트로 애니메이션 화면
        container = document.querySelector('.main-container'); // 메인 콘테이너
        sections = document.querySelectorAll('section'); // 여러 섹션
        sectionTitles = document.querySelectorAll('.menu-inner h2 span'); // 여러 섹션 타이틀(h2)
        sectionSVGs = document.querySelectorAll('svg.background rect.border'); // 섹션 SVG.
        aboutThum = document.querySelector('.profile.overview .thum'); // ABOUT섹션 썸네일.
        aboutTexts = document.querySelectorAll('.profile.introduce [class*=-info]'); // ABOUT섹션 텍스트들.
        scrollTargets = [...sections, footer]; // 사이트의 전체 타겟 섹션들(헤더빼고).
        targetCount = scrollTargets.length; // 전체 타켓 섹션의 길이값.
    }

    // #### 기본동작 ####

    // ## 페이지 재로드되면 페이지 최상단으로 이동. ##
    function reloadScrollTop(){
        setTimeout(() => {
            window.scrollTo({top:0});
        }, 100);
    }
    // ## 마우스 휠 스크롤할 때 한 섹션마다 부드럽게 이동. ##
    function mouseWheelEvent(){
        gsap.registerPlugin(Observer, scrollTo);

        Observer.create({
            target: window,
            type: 'wheel',
            onUp: () => gotoSection(contentCount - 1),
            onDown: () => gotoSection(contentCount + 1),
            tolerance: 500,
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
                    markers: true,
                }
            })
        })
    }

    // #### 헤더 HEADER ####

    // ## GNB 메뉴클릭시 해당섹션으로 스크롤 이동. ##
    //function gnbBtnClickEvent(){}

    // #### 자기소개 ABOUT ####
    // ## 썸네일 ##
    function aboutThmbnail(){
        gsap.to(aboutThum,{
            opacity:1,
            scrollTrigger:{
                trigger: aboutThum,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse", 
            }
        })
    }
    // ## 소개문구 ##
    function aboutInfoText(){
        aboutTexts.forEach((text)=>{
            gsap.fromTo(text,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    scrollTrigger:{
                        trigger:text,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            )
        })
    }

    // #### 스킬소개 SKILLS ####
    // ## 썸네일 ##
})