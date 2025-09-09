document.addEventListener('DOMContentLoaded', function(){
    let header; // 헤더
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
        mouseWheelEvent();
        openBgDelete();
    }

    function mouseWheelEvent(){
        container = document.querySelector('.main-container');
        sections = document.querySelectorAll('section');
        sectionCount = sections.length;
        scrollThreadHold = 300;
        wheelCount = 0;

        container.addEventListener('wheel', (e) => {
            e.preventDefault();

            if(e.deltaY > 0){
                wheelCount += Math.abs(e.deltaY);
            }
            else{
                wheelCount -= Math.abs(e.deltaY);
            }

            if(Math.abs(wheelCount) > sectionCount){
                if(wheelCount > 0){
                    gotoSection(contentCount + 1);
                }
                else{
                    gotoSection(contentCount - 1);
                }
                wheelCount = 0;
            }
        });
    };

    function gotoSection(target){
        target = Math.max(0,Math.min(target, sectionCount - 1));
        contentCount = target;
        animateSection();
    }

    function animateSection(){
        const moveY = -contentCount * window.innerHeight;
        gsap.to(container,{
            y : moveY,
        })
    }

    // 4.5초(4500밀리초)후 인트로 애니메이션 화면 DISPLAY NONE(가리기)
    function openBgDelete(){
        openBg = document.querySelector('.opening-container');
        setTimeout(()=>{
            openBg.style.display = 'none';
        }, 4500)
    }
})