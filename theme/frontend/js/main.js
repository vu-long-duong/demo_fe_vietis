WEBS = ( function ()
{
  var menuAccordion = function () {
        var previousElement = null;
        var accItemHeaders = document.querySelectorAll(
          ".Outsource-group-main-list-item-top"
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
                "Outsource-group-main-list-item--active"
              );
    
              if (previousElement === this) {
                return;
              }
    
              if (previousElement) {
                previousElement.parentElement.classList.remove(
                  "Outsource-group-main-list-item--active"
                );
              }
    
              previousElement = this;
            }
          });
        }
  }

  var languageChange = function ()
  {
    var languageLinks = document.querySelectorAll('.Header-main-content-language__option');
    languageLinks.forEach(link => {
      link.addEventListener('click', handleLanguageChange);
    });

    function handleLanguageChange ( event )
    {
      event.preventDefault();
      var selectedLanguage = event.target.dataset.lang;
      var defaultLanguageLink = document.querySelector('.Header-main-content-language__option');
      defaultLanguageLink.textContent = selectedLanguage;
    }
  }
  
  var firework = function () {
    var lines = document.querySelectorAll(".Banner-line__img");

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
      var btnMenu = document.querySelector('.Header-main__menu');
      var btnClose = document.querySelector('.Header-main-content__close');
      var wrapper = document.querySelector('.wrapper');
      var wrapperGroup = document.querySelector('.Header-main-content-group');

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
    var headerLogoNavs = document.querySelectorAll( '.Header-main-content-group-nav-wrap' );

    var previousElement = null;
      if (headerLogoNavs.length <= 0) {
        return;
      }
  
    for ( var i = 0; i < headerLogoNavs.length; i++ ) {
          headerLogoNavs[i].addEventListener( "click", function ()
          {
            var parentAccItemHeader = this.parentElement;
            if (parentAccItemHeader) {
              parentAccItemHeader.classList.toggle(
                "Header-main-content-group-nav--active"
              );
    
              if (previousElement === this) {
                return;
              }
    
              if (previousElement) {
                previousElement.parentElement.classList.remove(
                  "Header-main-content-group-nav--active"
                );
              }
    
              previousElement = this;
            }
          });
      }
  }
  
  var runNumber = function () {
    var counters = document.querySelectorAll('.General-content-list-item__number');
    
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
            if (className.trim() === ".Leader-list") {
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

  var scrollHeader = function () {
      var header = document.querySelector('Header');
      var headerHeight = header.offsetHeight;
      var isFixed = false;

      window.addEventListener('scroll', function() {

          var shouldBeFixed = window.scrollY > headerHeight;
          if (shouldBeFixed !== isFixed) {
              isFixed = shouldBeFixed;
              header.classList.toggle('Header--fixed', isFixed);
          }
      });
  }

  var scrollTop = function () {
    var scrollToTop = document.querySelector( ".jsScrollToTop" );
    window.onscroll = function() {
        var banner = document.querySelector(".Banner");
        var bannerHeight = banner.offsetHeight;

        if (document.documentElement.scrollTop > bannerHeight) {
            scrollToTop.classList.add("show");
        } else {
            scrollToTop.classList.remove("show");
        }
    };

    scrollToTop.addEventListener( "click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
  }
    
  var ifameAction = function ()
  {
    var modal = document.querySelector(".Banner-modal");
    var btn = document.querySelector( ".Banner-body-view__icon" );

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
      scrollTop();
      ifameAction();
      menuMobile();
      slideSlick(".Slide-main-list , .Leader-list");
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
