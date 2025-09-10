document.addEventListener('DOMContentLoaded', function(){
    let header; // 헤더
    let footer; // 푸터
    let openBg; // 인트로 애니메이션 화면
    let gnb; // GNB 네비게이션
    let gnbMenu; // GNB 네비게이션 메뉴
    let gnbBtn; // GNB 반응형 버튼
    let gnbIcon; // GNB 반응형 버튼 아이콘
    let container; // 페이지 메인 콘테이너
    let sections; // 페이지 섹션
    let sectionCount; // 페이지 섹션 개수
    let scrollThreadHold // 스크롤 최소 이동값
    let card; // 스킬 카드
    let info; // 스킬 소개

    let contentCount = 0; // 전체 카운트 초기값
    let wheelCount = 0;

    init();

    function init(){
        reloadScrollTop();
        mouseWheelEvent();
        openBgDelete();
    }

    function reloadScrollTop(){
        setTimeout(() => {
            window.scrollTo({top:0});
        }, 100);
    }

    function mouseWheelEvent(){
        container = document.querySelector('.main-container');
        sections = document.querySelectorAll('section');
        footer = document.querySelector('footer');
        scrollTargets = [...sections, footer];
        targetCount = scrollTargets.length;
        scrollThreadHold = 300;
        wheelCount = 0;

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
    function gotoSection(target){
        if(target < 0 || target >= targetCount) return;

        contentCount = target;
        console.log(contentCount);

        gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: scrollTargets[target],
            autoKill: false
        }
    });
    }
    

    // 4.5초(4500밀리초)후 인트로 애니메이션 화면 DISPLAY NONE(가리기)
    function openBgDelete(){
       openBg = document.querySelector('.opening-container');
       setTimeout(()=>{
           openBg.style.display = 'none';
       }, 4500)
    }
})