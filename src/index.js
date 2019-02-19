import './sass/main.scss';
import $ from 'jquery';
import 'slick-carousel';

let slider = $('.Block-gallery-content');
slider.slick({
  infinite: false,
  slidesToShow: 3,
  // variableWidth: true,
  prevArrow: '<div class="Prev-arrow"><img src="./images/prevArrow.png" /></div>',
  nextArrow: '<div class="Next-arrow"><img src="./images/nextArrow.png" /></div>',
  appendArrows: $('.Block-gallery-content__navigation'),
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

let sliderPublishers = $('.Block-about-us');
sliderPublishers.slick({
  infinite: false,
  arrows: false,
  dots: true,
  // variableWidth: true,
  customPaging: function(slider, i) {
    return '';
  },
  appendDots: $('.Block-about-us__navigation'),
  // dotsClass: 'Block-about-us__navigation',
  slidesToShow: 1,
});

window.onload = function() {
  let mobileMenu = document.querySelector('.Top-menu-mobile'),
    mobileContent = document.querySelector('.Menu-mobile-content'),
    sections = document.querySelectorAll('section'),
    closeIcon = document.querySelector('.Menu-mobile-content__close-icon');

  let classListMenu = mobileMenu.classList,
    classListMobileContent = mobileContent.classList;

  mobileMenu.addEventListener('click', function() {
    changeClassForListItems(sections, 'Hide');
    classListMobileContent.toggle('Hide');
    classListMenu.toggle('Hide');
    classListMenu.toggle('Active');
  });

  closeIcon.addEventListener('click', function() {
    changeClassForListItems(sections, 'Hide');
    classListMobileContent.toggle('Hide');
    classListMenu.toggle('Hide');
    classListMenu.toggle('Active');
  });
};

function changeClassForListItems(selector, className) {
  for (let i = 0; i < selector.length; ++i) {
    let classListSelectors = selector[i].classList;
    classListSelectors.toggle(className);
  }
}
