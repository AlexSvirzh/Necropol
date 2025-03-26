document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) { 
            menuBtn.classList.add('menu-btn--scrolled');
        } else {
            menuBtn.classList.remove('menu-btn--scrolled');
        }
    });

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            document.getElementById('menu-toggle').checked = false; 
        });
    });
    const scrollTopButton = document.getElementById("scrollTopButton");


    function scrollToTop() {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }

    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 20) {
            scrollTopButton.style.opacity = "1";
            scrollTopButton.style.visibility = "visible";
        } else {
            scrollTopButton.style.opacity = "0";
            scrollTopButton.style.visibility = "hidden";
        }
    });

    scrollTopButton.addEventListener('click', scrollToTop);
});