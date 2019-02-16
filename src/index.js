import './sass/main.scss';
import $ from 'jquery';
import 'slick-carousel';

let slider = $('.Block-gallery-content');
slider.slick({
  infinite: false,
  slidesToShow: 3,
  variableWidth: true,
  prevArrow: '<div class="Prev-arrow"><img src="./images/prevArrow.png" /></div>',
  nextArrow: '<div class="Next-arrow"><img src="./images/nextArrow.png" /></div>',
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

function foo(num) {
  if (num < 2) return false;
  let count = 0;
  for (let i = 1; i <= num; ++i) {
    if (num % i === 0) {
      count++;
    }
    if (count > 2) {
      return false;
    }
  }
  return true;
}

console.log(foo(11));
