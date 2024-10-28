WEBS = (function () {

    var menuAccordion = function () {
        var previousElement = null;
        var accItemHeaders = document.querySelectorAll(
          ".introduce-outsource-main-list-item-top"
        );
    
        if (accItemHeaders.length <= 0) {
          return;
        }
    
        for (var i = 0; i < accItemHeaders.length; i++) {
            accItemHeaders[i].addEventListener( "click", function ()
            {
            var parentAccItemHeader = this.parentElement;
    
            if (parentAccItemHeader) {
              parentAccItemHeader.classList.toggle(
                "introduce-outsource-main-list-item-top--active"
              );
    
              if (previousElement === this) {
                return;
              }
    
              if (previousElement) {
                previousElement.parentElement.classList.remove(
                  "introduce-outsource-main-list-item-top--active"
                );
              }
    
              previousElement = this;
            }
          });
        }
    }

    var menuMobile = function () {
        var btnMenu = document.querySelector('.header-logo__menu');
        var btnClose = document.querySelector('.header-logo__close');
        var wrapper = document.querySelector('.wrapper');
        var wrapperGroup = document.querySelector('.header-logo-group');

        btnMenu.addEventListener('click', function() {
          wrapper.classList.add('show');
        });

        btnClose.addEventListener('click', function() {
          wrapper.classList.remove('show');
        } );
      
        document.addEventListener('click', (event) => {
          if (!wrapperGroup.contains(event.target) && !btnMenu.contains(event.target)) {
            wrapper.classList.remove('show');
          }
        } );
      
      // nav
      var headerLogoNav = document.querySelector('.header-logo-nav');
      var listItems = headerLogoNav.querySelectorAll( 'li:has(ul)' );

      var previousElement = null;
        if (listItems.length <= 0) {
          return;
        }
    
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].addEventListener( "click", function ()
            {
            var parentAccItemHeader = this.parentElement;
    
            if (parentAccItemHeader) {
              parentAccItemHeader.classList.toggle(
                "header-logo-nav--active"
              );
    
              if (previousElement === this) {
                return;
              }
    
              if (previousElement) {
                previousElement.parentElement.classList.remove(
                  "header-logo-nav--active"
                );
              }
    
              previousElement = this;
            }
          });
        }
      
    }
  
    var runNumber = function () {
      var counters = document.querySelectorAll('.general-content-list-item__number');
      
      counters.forEach(counter => {
        var target = +counter.getAttribute('data-target');
  
        var animate = () => {
          var current = +counter.textContent.replace('+', '');
  
          var formattedCurrent = current < 10 ? `0${current}` : current;
          if (current < target) {
            counter.textContent = `${formattedCurrent + 1}+`;
            requestAnimationFrame(animate);
          } else {
            counter.textContent = `${target < 10 ? `0${target}` : target+"+"}`;
          }
        };
  
        var observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animate();
              observer.unobserve(counter);
            }
          });
        });
  
        observer.observe(counter);
      });
    }
  
    var firework = function ()
    {
      var banner = document.querySelector('.banner');
      var firework = document.createElement('div');
      firework.className = 'banner-firework';
      firework.style.left = Math.random() * 100 + '%';
      banner.appendChild(firework);

      setTimeout(() => {
          banner.removeChild(firework);
      }, 2000);
    }

    var slideSlick = function (classNames) {
      // Split the classNames parameter by commas
      classNames = classNames.split(',');
  
      // Wait for the document to be ready
      $(document).ready(function () {
          classNames.forEach(className => {
              if (className.trim() === ".leader-list") {
                $(className).slick({
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    arrows: true,
                    prevArrow: false,
                    nextArrow: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            }
                        }
                    ],
                });
              }
              else
              {
                $(className).slick({
                  dots: true,
                  infinite: false,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: false,
                  autoplaySpeed: 2000,
                  arrows: true,
                  prevArrow: false,
                  nextArrow: false,
              });
            }
          });
      });
  }

    var scrollHeader = function() {
        var header = document.querySelector('header');
        var headerHeight = header.offsetHeight;
        var isFixed = false;

        window.addEventListener('scroll', function() {

            var shouldBeFixed = window.scrollY > headerHeight;
            if (shouldBeFixed !== isFixed) {
                isFixed = shouldBeFixed;
                header.classList.toggle('fixed', isFixed);
            }
        });
    }
    
    var ifameAction = function ()
    {
      document.querySelector('.banner-body-view__icon').addEventListener('click', function (event) {
        event.preventDefault();
    
        var videoContainer = document.getElementById('banner-video');
    
        videoContainer.innerHTML = `
            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/Vj_5mYUQjzk" title="VIETIS President Sharing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
        videoContainer.style.display = 'block';
        
        document.addEventListener('click', function closeVideo(event) {
          if ( !videoContainer.contains( event.target ) && !event.target.closest( '.banner-body-view__icon' ) )
          {
            videoContainer.style.display = 'none';
            videoContainer.innerHTML = '';
            document.removeEventListener('click', closeVideo);
          }
        });
      });
    }

    return {
        _: function () {
            scrollHeader();
            ifameAction();
            menuMobile();
            slideSlick(".slide-main-list , .leader-list");
            menuAccordion();
            runNumber();
            // setInterval(firework, 2000);
        }
    };
})();

document.addEventListener("DOMContentLoaded", function () {
    WEBS._();
});
