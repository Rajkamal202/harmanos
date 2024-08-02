document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('navbar_top');
    const body = document.body;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            if (!navbar.classList.contains('fixed-top')) {
                navbar.classList.add('fixed-top');
                body.style.paddingTop = `${navbar.offsetHeight}px`;
            }
        } else {
            if (navbar.classList.contains('fixed-top')) {
                navbar.classList.remove('fixed-top');
                body.style.paddingTop = '0';
            }
        }
    });
});
