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

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollTopButton").style.opacity = "1";
            document.getElementById("scrollTopButton").style.visibility = "visible";
        } else {
            document.getElementById("scrollTopButton").style.opacity = "0";
            document.getElementById("scrollTopButton").style.visibility = "hidden";
        }
    }
});