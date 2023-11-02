import 'slick-carousel/slick/slick';
import { Fancybox } from "@fancyapps/ui";
import $ from 'jquery';

import { TabsManager } from './tabs';
import ApiService from './services/api-service';

function init() {
    $('.slider').slick({
        slidesToShow: 4,
        prevArrow: '.slider-prev',
        nextArrow: '.slider-next',
        infinite: false,
    });

    new TabsManager(document.getElementById('myTabs')); 

    Fancybox.bind("[data-fancybox]");

    ApiService.getServices().then(initializeServiceList);

    async function submitHandler() {
        try {
            await ApiService.createOrder({});
        } catch() {

        } finally {
            hideLoader();
        }
    }
}

$(init);