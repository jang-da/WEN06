document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById('main-content');
    const introContainer = document.getElementById('intro-container');

    // 인트로 컨테이너가 없는 페이지(project, profile)에서는 실행하지 않음
    if (!introContainer) {
        return;
    }
    
    // Hide main content initially
    gsap.set(mainContent, { autoAlpha: 0 }); // 인트로 중 메인 콘텐츠 숨기기
    
    // 인트로 애니메이션 동안 스크롤 방지
    document.documentElement.style.overflow = 'hidden'; // <html> 스크롤 방지
    document.body.style.overflow = 'hidden'; // <body> 스크롤 방지
    
    // 1. 요소들의 초기 상태 설정
    gsap.set("#panelTop", { yPercent: 0 });
    gsap.set("#panelBottom", { yPercent: 0 });

    // 상단 패널 내부 텍스트들의 초기 상태 설정 (투명하고 중앙에 위치)
    gsap.set(["#codeText", "#slashText", "#projectText"], { autoAlpha: 0 }); // 모든 텍스트 초기 투명
    
    // 텍스트 이동 거리를 동적으로 계산하기 위해 요소 참조
    const panelTop = document.getElementById('panelTop');
    const codeText = document.getElementById('codeText');
    const projectText = document.getElementById('projectText');

    // 2. GSAP 타임라인 생성, onComplete 콜백 추가
    const tl = gsap.timeline({
        onComplete: () => {
            // Animation is complete
            gsap.to(introContainer, { 
                autoAlpha: 0, 
                duration: 0.5,
                onComplete: () => introContainer.style.display = 'none' 
            });
            gsap.to(mainContent, { autoAlpha: 1, duration: 0.5, delay: 0.2 });
            document.documentElement.style.overflow = ''; // <html> 스크롤 복원
            document.body.style.overflow = ''; // <body> 스크롤 복원
        }
    });

    // 3. 타임라인에 애니메이션 추가
    tl.to(["#codeText", "#slashText", "#projectText"], {
        duration: 0.8,
        autoAlpha: 1,
        ease: "power2.out"
    });

    tl.to(codeText, {
        duration: 1,
        x: () => {
            const panelLeft = panelTop.getBoundingClientRect().left;
            const codeRight = codeText.getBoundingClientRect().right;
            return panelLeft - codeRight - 10;
        },
        ease: "power3.inOut"
    }, "-=0.4"); 

    tl.to(projectText, {
        duration: 1,
        x: () => {
            const panelRight = panelTop.getBoundingClientRect().right;
            const projectLeft = projectText.getBoundingClientRect().left;
            return panelRight - projectLeft + 10;
        },
        ease: "power3.inOut"
    }, "<");
    
    tl.to("#panelTop", {
        duration: 1.2,
        yPercent: -100,
        ease: "power3.inOut" 
    }, "+=0.5");

    tl.to("#panelBottom", {
        duration: 1.2,
        yPercent: 100,
        ease: "power3.inOut"
    }, "<"); 
});