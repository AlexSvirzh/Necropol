document.addEventListener('DOMContentLoaded', function() {

    const menuBtn = document.querySelector('.menu-btn');
    const menuToggle = document.getElementById('menu-toggle');

  
    if (menuBtn && menuToggle) { 
        menuBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            menuToggle.checked = !menuToggle.checked; 
        });
    }



    window.addEventListener('scroll', function() {
        if (menuBtn) { 
            if (window.pageYOffset > 50) {
                menuBtn.classList.add('menu-btn--scrolled');
            } else {
                menuBtn.classList.remove('menu-btn--scrolled');
            }
        }


        const scrollTopButton = document.getElementById("scrollTopButton");
        if (scrollTopButton) { 
            if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
                scrollTopButton.style.opacity = "1";
                scrollTopButton.style.visibility = "visible";
            } else {
                scrollTopButton.style.opacity = "0";
                scrollTopButton.style.visibility = "hidden";
            }
        }
    });


    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            if (menuToggle) { 
                 menuToggle.checked = false; 
            }
        });
    });



    const scrollTopButton = document.getElementById("scrollTopButton");

    function scrollToTop() {
        window.scrollTo({ 
            top: 0,
            behavior: 'smooth'
        });
    }

    if (scrollTopButton) { 
       scrollTopButton.addEventListener('click', scrollToTop);
    }

});