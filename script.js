document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.querySelector('.menu-btn');
    const menuToggle = document.getElementById('menu-toggle');
    const scrollTopButton = document.getElementById("scrollTopButton");

    if (menuBtn && menuToggle) {
        menuBtn.addEventListener('click', function (event) {
            event.preventDefault();
            menuToggle.checked = !menuToggle.checked;
        });
    }

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            if (menuToggle) {
                menuToggle.checked = false;
            }
        });
    });

    window.addEventListener('scroll', function () {
        const yOffset = window.pageYOffset;

        if (menuBtn) {
            if (yOffset > 50) {
                menuBtn.classList.add('menu-btn--scrolled');
            } else {
                menuBtn.classList.remove('menu-btn--scrolled');
            }
        }

        if (scrollTopButton) {
            if (yOffset > 20) {
                scrollTopButton.style.opacity = "1";
                scrollTopButton.style.visibility = "visible";
            } else {
                scrollTopButton.style.opacity = "0";
                scrollTopButton.style.visibility = "hidden";
            }
        }
    });

    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});