import LocomotiveScroll from 'locomotive-scroll';

const element = document.querySelector('[data-scroll-container]');

const scroll = new LocomotiveScroll({
    el: element,
    smooth: true,
    multiplier: 4,
});