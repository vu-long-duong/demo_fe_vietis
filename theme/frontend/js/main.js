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
        var btnMenu = document.querySelector('.header-top-mobile-head__menu');
        var btnClose = document.querySelector('.header-top-mobile-group-top__close');
        var mobileGroup = document.querySelector('.header-top-mobile-group');

        btnMenu.addEventListener('click', function() {
            mobileGroup.classList.add('header-top-mobile-group-active');
        });

        btnClose.addEventListener('click', function() {
            mobileGroup.classList.remove('header-top-mobile-group-active');
        });
    }

    var slideSlick = function ( className )
    {
        $(document).ready(function(){
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
        });
    }

    var scrollHeader = function() {
        var header = document.querySelector('header');
        var headerTop = document.querySelector('.header-top');
        var headerHeight = header.offsetHeight;
        var isFixed = false;

        window.addEventListener('scroll', function() {

            var shouldBeFixed = window.scrollY > headerHeight;
            if (shouldBeFixed !== isFixed) {
                isFixed = shouldBeFixed;
                headerTop.classList.toggle('fixed', isFixed);
            }
        });
    }

    return {
        _: function () {
            scrollHeader();
            menuMobile();
            slideSlick(".slide-main-list , .leader-list");
            menuAccordion();
        }
    };
})();

document.addEventListener("DOMContentLoaded", function () {
    WEBS._();
});
