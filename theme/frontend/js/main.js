WEBS = (function () {
    var headerHover = function () {
        var items = document.querySelectorAll('.header-top-pc-logo-nav__link');
        items.forEach(item => {
            item.addEventListener('mouseover', () => item.classList.add('header-top-pc-logo-nav__link--active'));
            item.addEventListener('mouseout', () => item.classList.remove('header-top-pc-logo-nav__link--active'));
        });
    }

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
                console.log(
                    accItemHeaders[i]
                )
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
        var menuMobile = document.querySelector('.header-top-mobile-menu-toggle');
        var headerList = document.querySelector('.header-top-mobile .wrapper');
        var btnClose = document.querySelector('.header-top-mobile-top__img');
        var itemMenus = document.querySelectorAll('.header-top-mobile-list li');

        function toggleHeaderList(action) {
            if (action === 'add') {
                headerList.classList.add('show');
            } else {
                headerList.classList.remove('show');
            }
        }

        menuMobile.addEventListener('click', () => toggleHeaderList('add'));

        btnClose.addEventListener('click', () => toggleHeaderList('remove'));

        itemMenus.forEach(item => {
            item.addEventListener('click', () => toggleHeaderList('remove'));
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
        var headerResponsive = document.querySelector('header .responsive');
        var childrenheaderTop = Array.from(headerTop.children);
        var headerHeight = header.offsetHeight;
        var isFixed = false;

        window.addEventListener('scroll', function() {

            var shouldBeFixed = window.scrollY > headerHeight;
            if (shouldBeFixed !== isFixed) {

                isFixed = shouldBeFixed;
                headerTop.classList.toggle('fixed', isFixed);

                if (isFixed) {
                    headerResponsive.classList.remove('responsive');
                    childrenheaderTop.forEach(child => {
                        child.classList.add('responsive');
                    });
                } else {
                    header.firstElementChild.classList.add('responsive');
                    childrenheaderTop.forEach(child => {
                        child.classList.remove('responsive');
                    });
                }
            }
        });
    }

    return {
        _: function () {
            scrollHeader();
            headerHover();
            menuMobile();
            slideSlick(".slide-main-list , .leader-list");
            menuAccordion();
        }
    };
})();

document.addEventListener("DOMContentLoaded", function () {
    WEBS._();
});
