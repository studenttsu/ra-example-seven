import 'slick-carousel/slick/slick';
import { Fancybox } from "@fancyapps/ui";
import $ from 'jquery';

import { TabsManager } from './tabs';

function init() {
    $('.slider').slick({
        slidesToShow: 4,
        prevArrow: '.slider-prev',
        nextArrow: '.slider-next',
        infinite: false,
    });

    new TabsManager(document.getElementById('myTabs')); 

    Fancybox.bind("[data-fancybox]");
}

$(init);