WEBS = ( function ()
{
  var menuAccordion = function () {
        var previousElement = null;
        var accItemHeaders = document.querySelectorAll(
          ".outsource-group-main-list-item-top"
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
                "outsource-group-main-list-item--active"
              );
    
              if (previousElement === this) {
                return;
              }
    
              if (previousElement) {
                previousElement.parentElement.classList.remove(
                  "outsource-group-main-list-item--active"
                );
              }
    
              previousElement = this;
            }
          });
        }
  }

  var languageChange = function ()
  {
    var languageLinks = document.querySelectorAll('.header-main-content-language__option');
    languageLinks.forEach(link => {
      link.addEventListener('click', handleLanguageChange);
    });

    function handleLanguageChange ( event )
    {
      event.preventDefault();
      var selectedLanguage = event.target.dataset.lang;
      var defaultLanguageLink = document.querySelector('.header-main-content-language__option');
      defaultLanguageLink.textContent = selectedLanguage;
    }
  }
  
  var firework = function () {
    var lines = document.querySelectorAll(".banner-line__img");

    function setRandomPosition(line) {
      var randomX =  Math.floor(Math.random() * 100) ;
      var randomDelay =  Math.floor(Math.random() * 5);
      var randomDuration =  Math.floor(Math.random() * 5) + 2;

      line.style.left = `${randomX}%`;
      line.style.animationDuration = `${randomDuration}s`;
      line.style.animationDelay = `${randomDelay}s`;
    }

    if (lines.length > 0) {
      lines.forEach((line) => {
        setRandomPosition(line);
      });
    }
  };

  var menuMobile = function () {
      var btnMenu = document.querySelector('.header-main__menu');
      var btnClose = document.querySelector('.header-main-content-group__close');
      var wrapper = document.querySelector('.wrapper');
      var wrapperGroup = document.querySelector('.header-main-content-group');

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
    var headerLogoNavs = document.querySelectorAll( '.header-main-content-group-nav-wrap' );

    var previousElement = null;
      if (headerLogoNavs.length <= 0) {
        return;
      }
  
    for ( var i = 0; i < headerLogoNavs.length; i++ ) {
          headerLogoNavs[i].addEventListener( "click", function ()
          {
            var parentAccItemHeader = this.parentElement;
            
            console.log(parentAccItemHeader)
  
          if (parentAccItemHeader) {
            parentAccItemHeader.classList.toggle(
              "header-main-content-group-nav--active"
            );
  
            if (previousElement === this) {
              return;
            }
  
            if (previousElement) {
              previousElement.parentElement.classList.remove(
                "header-main-content-group-nav--active"
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

  var slideSlick = function (classNames) {
    classNames = classNames.split(',');

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
                      },
                      {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
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
              header.classList.toggle('header--fixed', isFixed);
          }
      });
  }
    
  var ifameAction = function ()
  {
    var modal = document.querySelector(".banner-modal");
    var btn = document.querySelector( ".banner-body-view__icon" );

    btn.addEventListener("click", function(event) {
      event.preventDefault();
      modal.style.display = "block";
      document.body.classList.add("no-scroll");
    });

    window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
          document.body.classList.remove("no-scroll");
        }
    }
  }

  return {
    _: function () {
        scrollHeader();
        ifameAction();
        menuMobile();
        slideSlick(".slide-main-list , .leader-list");
        menuAccordion();
        runNumber();
        firework();
        languageChange();
    }
  };
})();

document.addEventListener( "DOMContentLoaded", function () {
  new WOW().init();
  WEBS._();
});
