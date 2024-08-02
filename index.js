document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.hero-bg');
    const navLinks = document.querySelectorAll('.nav-link'); // Assume .nav-link is the class for navigation links

    function handleScroll() {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPos + 50) { // +50 to give a bit of buffer
                const id = section.id;
                const activeLink = document.querySelector('.active');
                const newActiveLink = document.querySelector(`a[href*=${id}]`).parentNode;

                if (activeLink && activeLink !== newActiveLink) {
                    activeLink.classList.remove('active');
                }

                if (newActiveLink) {
                    newActiveLink.classList.add('active');
                }
            }
        });
    }

    // Throttle scroll event to improve performance
    let isThrottled = false;
    window.addEventListener('scroll', () => {
        if (!isThrottled) {
            isThrottled = true;
            setTimeout(() => {
                handleScroll();
                isThrottled = false;
            }, 100); // Adjust time interval as needed
        }
    });

    // Initial call in case the user starts in a scrolled position
    handleScroll();
});
