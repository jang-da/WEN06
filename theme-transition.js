document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    if (!themeToggleButton) return;

    let isDarkMode = true;

    themeToggleButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;

        const DURATION = 0.5;
        const EASE = "power2.inOut";

        const darkColors = {
            bg: getComputedStyle(document.documentElement).getPropertyValue('--c-black').trim(),
            text: getComputedStyle(document.documentElement).getPropertyValue('--c-sky-blue').trim(),
            border: '#333',
            headerBg: 'rgba(0, 0, 0, 0.9)',
            navBorder: getComputedStyle(document.documentElement).getPropertyValue('--c-sky-blue').trim(),
            logoFilter: 'invert(81%) sepia(15%) saturate(545%) hue-rotate(149deg) brightness(92%) contrast(91%)',
            iconFilter: 'invert(81%) sepia(15%) saturate(545%) hue-rotate(149deg) brightness(92%) contrast(91%)',
            scrollTopBg: getComputedStyle(document.documentElement).getPropertyValue('--c-sky-blue').trim(),
            scrollTopText: getComputedStyle(document.documentElement).getPropertyValue('--c-black').trim()
        };

        const lightColors = {
            bg: getComputedStyle(document.documentElement).getPropertyValue('--c-sky-blue').trim(),
            text: getComputedStyle(document.documentElement).getPropertyValue('--c-text-primary').trim(),
            border: '#EFEFEF',
            headerBg: 'rgba(168, 213, 226, 0.9)',
            navBorder: '#EFEFEF',
            logoFilter: 'none',
            iconFilter: 'none',
            scrollTopBg: getComputedStyle(document.documentElement).getPropertyValue('--c-text-primary').trim(),
            scrollTopText: getComputedStyle(document.documentElement).getPropertyValue('--c-white').trim()
        };

        const targetColors = isDarkMode ? darkColors : lightColors;

        // 헤더 GNB 색상 전환
        gsap.to(".site-header", { backgroundColor: targetColors.headerBg, borderBottomColor: targetColors.border, duration: DURATION, ease: EASE });
        gsap.to(".site-header .logo img", { filter: targetColors.logoFilter, duration: DURATION, ease: EASE });
        gsap.to(".site-header nav", { borderColor: targetColors.navBorder, duration: DURATION, ease: EASE });
        gsap.to(".site-header nav a", { color: targetColors.text, duration: DURATION, ease: EASE });
        gsap.to(".site-header nav img", { filter: targetColors.iconFilter, duration: DURATION, ease: EASE });

        // GSAP를 사용하여 색상 전환 애니메이션
        gsap.to("#main-content, footer", {
            backgroundColor: targetColors.bg,
            color: targetColors.text,
            duration: DURATION,
            ease: EASE
        });

        gsap.to(".info-item, .info-section, footer", {
            borderColor: targetColors.border,
            duration: DURATION,
            ease: EASE
        });

        gsap.to(".info-section h2, .info-item h3, .info-item p", {
            color: targetColors.text,
            duration: DURATION,
            ease: EASE
        });

        // About 섹션 텍스트 및 테두리 색상 전환
        gsap.to(".about-container p, .about-container h2", { color: targetColors.text, duration: DURATION, ease: EASE });
        gsap.to(".image-box", { borderColor: targetColors.navBorder, duration: DURATION, ease: EASE });

        // Scroll to Top 버튼 색상 전환
        gsap.to("#scrollTopBtn", { 
            backgroundColor: targetColors.scrollTopBg, 
            color: targetColors.scrollTopText, 
            duration: DURATION, 
            ease: EASE 
        });
    });
});