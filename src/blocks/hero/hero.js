import $ from 'jquery';

require('slick-carousel');

$('.hero').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000
});
