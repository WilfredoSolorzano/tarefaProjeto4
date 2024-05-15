document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll("[data-tab-button]");
    const tabContents = document.querySelectorAll("[data-tab-id]");
    const trailerButton = document.getElementById('trailerButton');
    const modal = document.getElementById('modal');
    const localVideo = document.getElementById('localVideo');
    const closeButton = document.getElementById('closeButton');
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    const scrollToTopBtn = document.getElementById('scrollToTopBtn'); 

   
    function toggleScrollToTopButton() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    
    window.addEventListener('scroll', function() {
        toggleScrollToTopButton();
        
        const posicaoAtual = window.scrollY;
        if (posicaoAtual > alturaHero) {
            header.classList.add('header--is-hidden');
        } else {
            header.classList.remove('header--is-hidden');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        scrollToTop();
    });


    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
          const tabId = button.getAttribute("data-tab-button");
    
          tabButtons.forEach(btn => btn.classList.remove("shows__tabs-button--is-active"));
          button.classList.add("shows__tabs-button--is-active");
    
          tabContents.forEach(content => content.classList.remove("shows__list--is-active"));
          const activeContent = document.querySelector(`[data-tab-id="${tabId}"]`);
          if (activeContent) {
            activeContent.classList.add("shows__list--is-active");
          }
        });
    });

    trailerButton.addEventListener('click', function() {
        modal.style.display = 'block';
        localVideo.play().catch(error => {
            console.error('Error al reproducir el video:', error);
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        localVideo.pause();
    });

    $('.slick-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    toggleScrollToTopButton();
});