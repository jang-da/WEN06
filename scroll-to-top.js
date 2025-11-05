document.addEventListener('DOMContentLoaded', () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (!scrollTopBtn) return;

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
            gsap.to(scrollTopBtn, { autoAlpha: 1, duration: 0.3 });
        } else {
            gsap.to(scrollTopBtn, { autoAlpha: 0, duration: 0.3, onComplete: () => {
                scrollTopBtn.style.display = "none";
            }});
        }
    };

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});