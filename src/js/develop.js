function dropdowns() {
    var drops = $('.dropdown-container');
    if(drops.length > 0){
        $(document).on('click', '.dropdown-btn', function () {
            var win = $(this).closest('.dropdown-container').find('.dropdown').eq(0);
            var that = this
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                win.stop().slideDown(200);
                $(document).on('click touchstart',function (event){
                    var ignore = $('.ignore-miss-click');
                    var but = $('.dropdown-btn');

                    var cont = $('.dropdown-container');
                    if (!but.is(event.target) && but.has(event.target).length === 0 && !cont.is(event.target) && cont.has(event.target).length === 0 && !ignore.is(event.target) && ignore.has(event.target).length === 0){
                        but.removeClass('active');
                        win.stop().slideUp(200);
                    }
                });
            }else{
                win.stop().slideUp(200);
            }

        });

        $(document).on('click', '.dropdown-close', function(){
            var cont = $(this).closest('.dropdown-container');
            var butt = cont.find('.dropdown-btn').eq(0);
            var winn = cont.find('.dropdown').eq(0);
            winn.stop().slideUp(200);
            butt.removeClass('active');
        });
    }
}
function catalogShowAll(){
    var but = $('.catalog-show-all');
    var arrows = $('.arrow-circle');
    if(but.length > 0){
        but.click(function () {
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                but.find('span').text('Свернуть все');
                arrows.each(function () {
                   var cont = $(this).closest('.dropdown-container');
                   $(this).addClass('active');
                   cont.find('.dropdown').eq(0).stop().slideDown();
                });
            }else{
                but.find('span').text('Развернуть все');
                arrows.each(function () {
                    var cont = $(this).closest('.dropdown-container');
                    $(this).removeClass('active');
                    cont.find('.dropdown').eq(0).stop().slideUp();
                });
            }
        });

    }
}
function sliderInit() {
    var slider = $('.slider__wrap');
    if(slider.length > 0){
        slider.slick({
            dots:true,
            arrows:true
        });
    }
    var slider2 = $('.mailer__slider');
    if(slider2.length > 0){
        slider2.slick({
            dots:false,
            arrows:true,
            infinite:false
        });
    }
    var slider3 = $('.card__slider-init');
    if(slider3.length > 0){
        slider3.slick({
            dots:false,
            arrows:true,
            infinite:false
        });
        cardSlider();
    }
}

function mobMenu(){
    var buttons = $('.caller-mob-menu');
    if(!buttons.length) return;
    buttons.each(function(){
        var rel = $(this).attr('data-relative')
        $(this).click(function () {
            buttons.removeClass('active');
            $('.mobile-menus__item').removeClass('show');
            $(this).toggleClass('active');

            if($(this).hasClass('active')){
                $('.mobile-menus__item[data-relative='+rel+']').addClass('show');
            }else{
                $('.mobile-menus__item[data-relative='+rel+']').removeClass('show');
            }
        });
    });
    var close = $('.mobile-menus__close');
    if(!close.length) return;

    close.click(function () {
       buttons.removeClass('active');
        $('.mobile-menus__item').removeClass('show');
    });


}
function footerhow() {
    var but = $('.footer__category-title');
    var cont = $('.footer__category-list');
    if(but.length > 0){
        but.click(function () {
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                cont.stop().slideDown();
            }else{
                cont.stop().slideUp();

            }
        });

    }
}
function showmoreCategory(){
    var but = $('.show-catmenu-items');
    var cont = $('.category-page__menu .hidden');
    if(but.length > 0){
        but.click(function () {
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                cont.addClass('show');
                but.find('span').text('Скрыть');
            }else{
                cont.removeClass('show');
                but.find('span').text('Показать еще');

            }
        });

    }
}
function selectStyler(){
    var select = $('.filter__sort select');
    if(select.length > 0){
        select.styler({
            selectPlaceholder:'Сортировать',
            selectSmartPositioning:false
        });
    }
    var select2 = $('.feed-form__select select');
    if(select2.length > 0){
        select2.styler({
            selectSmartPositioning:false,
            selectSearchLimit: 4
        });
    }
    var select3 = $('.card__select select');
    if(select3.length > 0){
        select3.styler({
            selectPlaceholder:'Выберете размер',
            selectSmartPositioning:false
        });
    }
    var select4 = $('.order-payment__select select');
    if(select4.length > 0){
        select4.styler({
            selectSmartPositioning:false
        });
    }
}
function filterCheckboxLogic(){
    var top = $('.filter__title');
    var input = $('.filter__list input');
    if(top.length > 0){
        check();
        input.on('change', function () {
            check();
        });
    }
    function check() {
        $('.filter__title span').remove();
        $('.filter__list input:checked').each(function () {
            var text = $(this).closest('label').find('span').text();
            var el = document.createElement('span');
            $(el).text(text+',');
            top.append(el);
        });
    }
}
function rangeLogic() {
    var range = $( "#slider-range" );
    if(range.length > 0){
        var minval = parseInt(range.attr('data-minval'));
        var maxval = parseInt(range.attr('data-maxval'));

        range.slider({
            range: true,
            min: minval,
            max: maxval,
            values: [ 0, parseInt(maxval/2) ],

            create: function( event, ui ) {
                $('input[name=minval]').val(minval);
                $('input[name=maxval]').val(parseInt(maxval/2));
                $('.filter__price-min span').text(minval);
                $('.filter__price-max span').text(maxval);

                $('.filter__price span').text(minval+' - '+maxval);
            },
            slide: function( event, ui ) {

                $('input[name=minval]').val(ui.values[ 0 ]);
                $('input[name=maxval]').val(ui.values[ 1 ]);
                $('.filter__price span').text(ui.values[ 0 ]+' - '+ui.values[ 1 ]);
            }
        });
        var setter = $('.filter__price-setter');
        if(setter.length > 0){
            setter.each(function () {
                $(this).click(function(){
                    var min = parseInt($(this).attr('data-minval'));
                    var max = parseInt($(this).attr('data-maxval'));
                    if (isNaN(min)){ min = 0;}
                    if (isNaN(max)){ max = maxval;}
                    $( "#slider-range" ).slider( "values", [ min, max ] );
                    $('.filter__price span').text(min+' - '+max);
                    $('input[name=minval]').val(min);
                    $('input[name=maxval]').val(max);
                });
            });
        }
        $('input[name=minval]').on('change', function () {
            changeInput();
        });
        $('input[name=maxval]').on('change', function () {
            changeInput();
        });
        function changeInput() {
            var min  = $('input[name=minval]').val();
            var max  = $('input[name=maxval]').val();
            if (min < 0 ) min = 0;
            if (max > maxval) max = maxval;
            $( "#slider-range" ).slider( "values", [ min, max ] );
            $('.filter__price span').text(min+' - '+max);
        }
    }


};
function showAllComments() {
    var but = $('.show-all-comments');
    var cont = $('.feedbacks__item.hidden');
    if(but.length > 0){
        but.click(function () {
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                cont.stop().slideDown();
                but.find('span').text('Скрыть');
            }else{
                cont.stop().slideUp();
                but.find('span').text('Показать еще');
            }
        })
    }
}
function itemsSlider() {
    var slider = $('.items-slider__wrap');
    if(slider.length > 0){
        slider.slick({
            dots:false,
            arrows:true,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1150, settings: {  slidesToShow: 5} },
                { breakpoint: 992, settings: {  slidesToShow: 4} },
                { breakpoint: 790, settings: {  slidesToShow: 3} },
                { breakpoint: 600, settings: {  slidesToShow: 2} },
                { breakpoint: 400, settings: {  slidesToShow: 1} }
            ]

        });
    }
}
function cardSlider(){
    var items = $('.card__thumb');
   
    if(items.length > 0){
        if(items.length > 6){
            var butt = $('.card__thumbs-butt');
            butt.addClass('show');
            butt.find('i').text(items.length - 4);
        }
        items.click(function () {
            var ind = $(this).index();
            $('.card__slider-init').slick('slickGoTo', ind);
        });
    }
}
function counterStart() {
    var items = $('.tovar__counter');
    if(items.length > 0){
        items.each(function(){
            tovarCounter($(this));
        })
    }
}
function tovarCounter($item) {

        var plus = $item.find('.tovar__butts-plus');
        var minus = $item.find('.tovar__butts-minus');
        var res = $item.find('.tovar__count');
        var current = parseInt(res.text());
        init($item);
        plus.click(function () {
            current++;
            res.text(current);
            init($item);
            sumBasket();
        });
        minus.click(function () {
            current--;
            res.text(current);
            init($item);
            sumBasket();
        });


        function init(item){
            var plus = item.find('.tovar__butts-plus');
            var minus = item.find('.tovar__butts-minus');
            var res = item.find('.tovar__count');
            var max = parseInt(res.attr('data-maxcount'));
            var current = parseInt(res.text());
            var input = item.find('input');
            input.val(current);
            minus.removeClass('unactive');
            plus.removeClass('unactive');
            item.find('.dropdowned').remove();
            if(current <= 1){
                minus.addClass('unactive');
            }
            if(current >= max){
                plus.addClass('unactive');
            }
            if(current == max){
                var message = generateMessage(current);
                console.log(message);
                var html = '<div class="dropdowned tovar__message"><div class="dropdowned__wrap"><div class="tovar__message-txt">'+message+'</div></div></div>';
                if(message.length > 0){
                    item.find('.tovar__butts').append(html);
                }
            }

        }
        function generateMessage(i) {
            if(i <= 0) return;
            var message = '';
            if(i == 1) message = 'Этот товар представлен в единственном экземпляре';
            if(i >= 2 && i <= 4) message = 'На складе осталось только '+i+' товара';
            if(i >= 5 ) message = 'На складе осталось только '+i+' товаров';

            return message;
        }

}
function startTimer(duration, display, separator, destroy) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if(separator == 0) display.text(minutes + " мин " + seconds + " сек");
        if(separator == 1) display.text(minutes + " : " + seconds);

        if (--timer < 0) {
            timer = duration;
            destroy.remove();
        }
    }, 1000);
}
function initTimer() {
    var timer = $('.timetogo__timer');
    if(timer.length > 0){
        var min = parseInt(timer.attr('data-start-sec'));
        var separator = 0; // 0 для мин/сек, 1 для :
        var destroy1 = $('.timetogo');
        startTimer(min, timer, separator, destroy1);
    }
    var timer2 = $('.timer-basket');
    if(timer2.length > 0){
        var min2 = parseInt(timer.attr('data-start-sec'));
        var separator2 = 1; // 0 для мин/сек, 1 для :
        var destroy2 = $('.basket__info-additional');
        startTimer(min2, timer2, separator2, destroy2);
    }

};

//baskets scripts---------------------START----------------------------

var timeToDisplayMessege = 4000;
var timeToAnimateDelMessege = 1000;
var maxToFreeDelivery = 3000;
var userName = 'Ivan';
function basketTabs() {
    var items = $('.basket-tabs__item');
    var tabs = $('.tab-content');
    if(items.length > 0){
        items.click(function () {
            var ind = $(this).index();
            items.removeClass('active');
            tabs.removeClass('active');
            $(this).addClass('active');
            tabs.eq(ind).addClass('active');
        });
    }
}
var mover = {
    defer:$('.defer__items'),
    basket:$('.basket__items'),
    toBasket:function (item) {
        var clone = item;
        var max = parseInt(clone.attr('data-maxcount'));
        clone.addClass('tovar--big');
        clone.find('.tovar__img').addClass('tovar__img--big');
        clone.find('.tovar__name').addClass('tovar__name--big');
        var bind = document.createElement('div');
        bind = $(bind).addClass('tovar__counter');
        var html = '' +
            '<div class="tovar__count" data-maxcount="'+max+'">1</div>'+
            '<input type="hidden" value="1">'+
            '<div class="tovar__butts">'+
            '<div class="tovar__butts-minus"></div>'+
            '<div class="tovar__butts-plus"></div>'+
            '</div>';
        bind.append(html);
        clone.find('.tovar__text').append(bind);
        clone.find('.complect__checkbox input').prop('checked', false);
        tovarCounter(bind);
        mover.basket.append(clone);
        sumBasket();

    },
    toDefer:function (item) {
        var clone = item;
        clone.removeClass('tovar--big');
        clone.find('.tovar__img').removeClass('tovar__img--big');
        clone.find('.tovar__name').removeClass('tovar__name--big');
        clone.find('.tovar__counter').remove();
        clone.find('.complect__checkbox input').prop('checked', false);
        mover.defer.append(clone);
        sumBasket();
    },
    checkCount:function (box) {
        var i = 0;
        $('.'+box+'__items .complect__checkbox input:checked').each(function () {
            i++;
        });
        var message = 'Выбрано 0 товаров';
        if(i == 1) message = 'Выбран 1 товар';
        if(i >= 2 && i <= 4) message = 'Выбрано '+i+' товара';
        if(i >= 5 ) message = 'Выбрано '+i+' товаров';
        $('.'+box+'__menu .mover__info').text(message);
        var bx = $('.basket__items .tovar').length;
        var dx = $('.defer__items .tovar').length;
        $('.basket-all').text(bx);
        $('.defer-all').text(dx);


    }

}
function sumBasket(){
    if(!$('.basket').length) return;
    var items = $('.basket__items .tovar');
    if(items.length > 0){
        var sum = 0;
        for (i = 0; i < items.length; i++){
            var price = parseInt($(items[i]).attr('data-price'),10);
            var count = $(items[i]).find('.tovar__counter input').val();
            sum += (price * count);
        }

        $('.js-total-price').text(prepareNumber(sum));
        var sale = (($('.js-total-sale').length > 0) ? parseInt($('.js-total-sale').attr('data-sale')) : 0)
        var total = sum - sale;
        $('.js-total-with-sale').text(prepareNumber(total));
        $('.greencar__line-in').attr('style', 'width:'+ getPercentage(maxToFreeDelivery, total)+'%;');
        var more = maxToFreeDelivery - total;
        $('.js-more-left').text(prepareNumber(more));
        if (more <= 0) {
            $('.container__less').addClass('show');
            $('.container__more').removeClass('show');
        }else{
            $('.container__more').addClass('show');
            $('.container__less').removeClass('show');
        }
        $('.header-top').attr('data-price-in-basket', total);


    }else{
        $('.js-total-price').text(0);
        $('.js-total-with-sale').text(0);
        $('.header-top').attr('data-price-in-basket', 0);
        $('.container__more').addClass('show');
        $('.container__less').removeClass('show');
        $('.greencar__line-in').attr('style', 'width:0%;');
        $('.js-more-left').text(prepareNumber(maxToFreeDelivery));
    }
}
function moversEvents() {
    if(mover.basket.length > 0 || mover.defer.length > 0){
        var bx = $('.basket__items .tovar').length;
        var dx = $('.defer__items .tovar').length;
        $('.basket-all').text(bx);
        $('.defer-all').text(dx);
        $('.basket__menu .mover__del').click(function () {
            $('.basket__items .complect__checkbox input:checked').each(function () {
                $(this).closest('.tovar').remove();
                mover.checkCount('basket');
                sumBasket();
            });
        });
        $('.mover__del-all').click(function () {
            $('.basket__items .tovar').remove();
            mover.checkCount('basket');
            sumBasket();
        });

        $('.basket__menu .mover__defer').click(function () {
            $('.basket__items .complect__checkbox input:checked').each(function () {
                var item = $(this).closest('.tovar');
                mover.toDefer(item);
                mover.checkCount('basket');
                createDeployMesage(0, item);
            });
        });
        $('.basket__menu .mover__undefer').click(function () {
            $('.basket__items .complect__checkbox input:not(:checked)').each(function () {
                var item = $(this).closest('.tovar');
                mover.toDefer(item);
                mover.checkCount('basket');
                createDeployMesage(0, item);

            });
        });
        $('.basket__menu .mover__discheck').click(function () {
            $('.basket__items .complect__checkbox input:checked').each(function () {
                $(this).prop('checked', false);
                mover.checkCount('basket');
            });
        });
        $('.basket__menu .mover__all').click(function () {
            $('.basket__items .complect__checkbox input:not(:checked)').each(function () {
                $(this).prop('checked', true);
                mover.checkCount('basket');
            });
        });
        $('.defer__menu .mover__del').click(function () {
            $('.defer__items .complect__checkbox input:checked').each(function () {
                $(this).closest('.tovar').remove();
                mover.checkCount('defer');
            });
        });
        $('.defer__menu .mover__all').click(function () {
            $('.defer__items .complect__checkbox input:not(:checked)').each(function () {
                $(this).prop('checked', true);
                mover.checkCount('defer');

            });
        });
        $('.defer__menu .mover__to-bas').click(function () {
            $('.defer__items .complect__checkbox input:checked').each(function () {
                var item = $(this).closest('.tovar');
                mover.toBasket(item);
                mover.checkCount('defer');
                createDeployMesage(1, item);
            });
        });
        $('.defer__menu .mover__unto-bas').click(function () {
            $('.defer__items .complect__checkbox input:not(:checked)').each(function () {
                var item = $(this).closest('.tovar');
                mover.toBasket(item);
                mover.checkCount('defer');
                createDeployMesage(2, item);
            });
        });
        $('.defer__menu .mover__discheck').click(function () {
            $('.defer__items .complect__checkbox input:checked').each(function () {
                $(this).prop('checked', false);
                mover.checkCount('defer');
            });
        });
        $('.defer__items .complect__checkbox input').on('change', function(){
            mover.checkCount('defer');
        });
        $('.basket__items .complect__checkbox input').on('change', function(){
            mover.checkCount('basket');
        });
    }
}
function initDeploy() {
    var container = document.getElementsByClassName('deploy');
    var result = container[0];
    if(!(container.length > 0)){
        var div = document.createElement('div');
        div.className = "deploy";
        div.setAttribute("data-msgs", 0);
        document.body.appendChild(div);
        result = div;
    }
    return result;
}
function createDeployMesage(type, item) {
    var deploy = initDeploy();
    var msgs = document.createElement('div');
    msgs.className = "deploy__item";
    var row = document.createElement('div');
    row.className = "deploy__row";
    var images = document.createElement('div');
    images.className = "deploy__img";
    var img = item.find('.tovar__img img').clone();
    var txt = document.createElement('span');
    $(images).append($(img));
    row.appendChild(images);
    row.appendChild(txt);

    msgs.appendChild(row);
    var car = document.createElement('div');
    car.className = "greencar";
    var cartext = '';
    var green = false;
    switch(type) {
        case 0: //товар отложен
            txt.textContent = 'Товар отложен';
            break;
        case 1: //товар добавлен в корзину
            var sumBaskets =  parseInt($('.header-top').attr('data-price-in-basket'), 10);
            var percent = getPercentage(maxToFreeDelivery, sumBaskets);
            green = true;
            car.innerHTML =' <div class="greencar__car-wrap">'+
                '<div class="greencar__start">0 ₽ </div>'+
                '<div class="greencar__line"><div class="greencar__line-in" style="width:'+percent+'%;"></div></div>'+
                '<div class="greencar__end">'+maxToFreeDelivery+' ₽</div>'+
                '</div>';
            var more = maxToFreeDelivery - sumBaskets;
            txt.textContent = 'Добавлен в корзину';
            if(more <= 0){
                cartext  = 'Ура! Мы доставим ваш заказ бесплатно!';
            }else{
                cartext = 'Хотите бесплатную доставку? Добавьте товаров еще на сумму '+prepareNumber(more)+' ₽';
            }
            var carNodeText = document.createElement('p');
            carNodeText.textContent = cartext;


            break;
        case 2: //член камневедов;
            txt.textContent = 'Добавлен в корзину';
            green = true;
            cartext  = 'Это значит, что мы доставим ваш заказ бесплатно. Приятных покупок!';
            car.innerHTML = '<p><b>'+userName+', вы — член Клуба Камневедов.</b></p>';
            var carNodeText = document.createElement('p');
            carNodeText.innerHTML = cartext;
            break;
        default:
           return;
    }
    if(green){
        car.appendChild(carNodeText);
        msgs.appendChild(car);
    }
       destroyThisMessage(msgs);
       deploy.appendChild(msgs);
}
function destroyThisMessage(msgs){
     setTimeout(function () {
         $(msgs).addClass('hide');
         setTimeout(function () {
             $(msgs).remove();
         },timeToAnimateDelMessege);
     }, timeToDisplayMessege);

}
function prepareNumber(number) { // формат числа для цен 99 999 999
    number = ''+number;
    number = number.split("").reverse().join("");
    var result = '';
    for (i = 1; i <= number.length; i++){
        var ind = i-1;
        result += number[ind];
        if(i % 3 == 0){result += ' ';}
    }
    result = result.split("").reverse().join("");
    return result;
}
function getPercentage(total, current) {
    total = parseInt(total, 10);
    current = parseInt(current, 10);
    var result = parseInt(((current * 100)/total),10);

    return ((total <= current) ? 100 : result);
}
//baskets scripts---------------------FINISH----------------------------

function orderingRadio() {
    var items = $('.order-delivery__label');
    if(items.length > 0){
        $('.order-delivery__label input').on('change', function () {
            items.removeClass('active');
            $('.order-delivery__dropdown').stop().slideUp();
            if($(this).prop('checked')){
                var cont = $(this).closest('.order-delivery__label').addClass('active');
                cont.find('.order-delivery__dropdown').stop().slideDown();
            }
        });
    }
}
function profileLogic(){
    var butt = $('.profile__show');
    if(butt.length > 0){
        butt.click(function (e) {
            e.preventDefault();
            $(this).closest('.profile__row').eq(0).addClass('active');
            $(this).closest('.profile__row').find('.profile__form').eq(0).stop().slideDown();
        });
    }
    var butt2 = $('.profile__close');
    if(butt2.length > 0){
        butt2.click(function () {
            $(this).closest('.profile__row').eq(0).removeClass('active');
            $(this).closest('.profile__row').find('.profile__form').eq(0).stop().slideUp();
        });
    }


}
function radioWatcher() {
    var radio = $('.js-watcher');
    if(radio.length > 0){
        $(document).on('change', '.js-watcher', function () {
            if($('.js-watcher:checked').hasClass('js-show')){
                console.log('pokag');
                $('.js-show').closest('.orderpay-modal__row').addClass('active');
                $('.js-show').closest('.orderpay-modal__row').find('.orderpay-modal__add').stop().slideDown();
            }else{
                console.log('sprach');
                $('.js-show').closest('.orderpay-modal__row').removeClass('active');
                $('.js-show').closest('.orderpay-modal__row').find('.orderpay-modal__add').stop().slideUp();
            }
        });
    }
}

$(document).ready(function () {
    $().fancybox({
        selector : '[data-fancybox="group"]',
        loop : true,
        hash     : false,
        toolbar  : false,
        afterShow : function( instance, current ) {
            instance.update();
        }

    });
    dropdowns();
    sumBasket();
    orderingRadio();
    initTimer();
    basketTabs();
    moversEvents();
    sliderInit();
    catalogShowAll();
    mobMenu();
    footerhow();
    showmoreCategory();
    selectStyler();
    filterCheckboxLogic();
    rangeLogic();
    showAllComments();
    itemsSlider();
    counterStart();
    profileLogic();
    radioWatcher();
    $('.slider1').slick();

});


/*dev2*/

var addDelMap = (function(){
    var btn = $('.js-del-map');

    btn.click(function(e){
        e.preventDefault();
        $(this).next().slideToggle();
        var $map = $('#map');
        if(addMap){
            $.getScript("http://maps.googleapis.com/maps/api/js?v=3.9&sensor=false&callback=gMapInitialize&key=AIzaSyC0_lMgx4X2bzB2ebVtlpcZIF6VAhK0NgE");
            addMap = !addMap;
        }
    });
})();

var addMap = true; 
var PopupMap = (function(){
    var $btn = $('.js-btn-map');
    var $mapClose = $('.js-map-close');

    $("[data-fancybox-map]").fancybox({
        modal: true,
        touch : {
            vertical : false,  // Allow to drag content vertically
            momentum : false   // Continue movement after releasing mouse/touch when panning
        },
        afterLoad: function() {
            setTimeout(function() {
                initGMap();
            }, 500);
            if (addMap){
                console.log('add map')
                $.getScript("http://maps.googleapis.com/maps/api/js?v=3.9key=AIzaSyC0_lMgx4X2bzB2ebVtlpcZIF6VAhK0NgE");
                addMap = !addMap;
            }
        }
    });

    $mapClose.click(function(){
        $.fancybox.close();
    });

    function initGMap() {
        var map;
        var zoom;

        map = new google.maps.Map(document.getElementById('popmap'), {
            center: {lat: 55.755231, lng: 37.616549}, 
            zoom: 12,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        infoWindow = new google.maps.InfoWindow({
            maxWidth: 240
        });

        google.maps.event.addListener(map, "click", function() {
            // infoWindow.close - закрываем информационное окно.
            infoWindow.close();
        });

        var markersData = [
            {
                lat: 55.764246,
                lng: 37.618367,
                address: "ХОРОШЕВСКОЕ Ш. 41А",
                phone: "+7 (499) 677-20-69",
                workhours: "пн-пт 10:00-20:00, сб 10:00-16:00, вс 10:00-14:00"
            },
            {
                lat: 55.757881,
                lng: 37.610806,
                address: "ХОРОШЕВСКОЕ Ш. 42А",
                phone: "+7 (499) 677-20-69",
                workhours: "пн-пт 10:00-20:00, сб 10:00-16:00, вс 10:00-14:00"
            },
            {
                lat: 55.762683,
                lng: 37.660390,
                address: "ХОРОШЕВСКОЕ Ш. 43А",
                phone: "+7 (499) 677-20-69",
                workhours: "пн-пт 10:00-20:00, сб 10:00-16:00, вс 10:00-14:00"
            },
            {
                lat: 55.762683,
                lng: 37.630843,
                address: "ХОРОШЕВСКОЕ Ш. 44А",
                phone: "+7 (499) 677-20-69",
                workhours: "пн-пт 10:00-20:00, сб 10:00-16:00, вс 10:00-14:00"
            },
            {
                lat: 55.738175,
                lng: 37.589916,
                address: "ХОРОШЕВСКОЕ Ш. 45А",
                phone: "+7 (499) 677-20-69",
                workhours: "пн-пт 10:00-20:00, сб 10:00-16:00, вс 10:00-14:00"
            }
        ];

        for (var i = 0; i < markersData.length; i++){
            var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
            var address = markersData[i].address;
            var phone = markersData[i].phone;
            var workhours = markersData[i].workhours;
            // Добавляем маркер с информационным окном
            addMarker(latLng, address , workhours, phone);
        }

        function addMarker(latLng, address , workhours, phone) {
                var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        address: address,
                        icon: {
                            url: "images/marker1.png"
                        }
                });
            
                // Отслеживаем клик по нашему маркеру
                google.maps.event.addListener(marker, "click", function() {
                    // contentString - это переменная в которой хранится содержимое информационного окна.
                    var contentString = '<div class="map-modal__info-block">' +
                        '<div class="map-modal__address">' + address + '</div>' +
                        '<div class="map-modal__phone">' + phone + '</div>' +
                        '<div class="map-modal__workhours">' + workhours + '</div>' +
                        '<a href="#" class="button button__yellow map-modal__button"><span>Выбрать</span></a>'
                        '</div>';
                    // Меняем содержимое информационного окна
                    infoWindow.setContent(contentString);
                    // Показываем информационное окно
                    infoWindow.open(map, marker);
            
                });
        }

        $btn.click(function(){
            zoom = map.getZoom();
            if (zoom > 9) map.setZoom(16);
            var lat = $(this).data('lat');
            var lng = $(this).data('lng');
            map.setCenter(new google.maps.LatLng(lat, lng));
        });
    }
})();

window.Gmap = null;

 var GMapHandler = function() {
     var e = $(".contacts__map-wrap");
     var i = "55.715797, 37.681662";
     var t = "55.715797, 37.681662";
     var a = "images/marker.png";
     var n = 16;
     if (!e.length) {
         return;
     }
     if (!window.map_coords) {
         /*console.log("[Gmap] Не заданы координаты в параметре map_coord. Используем стандартное значение");*/
         window.map_coords = "55.69777704873052,37.77824859751695;55.7535378290641,37.624929644118836;10";
     }
     var r = window.map_coords.split(";");
     if (r[0]) i = r[0];
     if (r[1]) t = r[1];
     if (r[2]) n = r[2];
     i = i.split(",");
     t = t.split(",");
     n = parseInt(n);
     var l = $(window).height();
     var o = false;
     var d = e.offset().top;
     setInterval(function() {
         if (!o) d = e.offset().top;
     }, 2e3);
     setInterval(function() {
         var e = $(document).scrollTop();
         if (!o && e > d - l * 3) {
             $.getScript("http://maps.googleapis.com/maps/api/js?v=3.9&sensor=false&callback=gMapInitialize&key=AIzaSyC0_lMgx4X2bzB2ebVtlpcZIF6VAhK0NgE");
             o = true;
         }
     }, 20);

     window.gMapInitialize = function() {
         window.Gmap = new google.maps.Map(document.getElementById("map"), {
             zoom: n,
             center: new google.maps.LatLng(parseFloat(i[0]), parseFloat(i[1])),
             mapTypeControlOptions: {
                 mapTypeIds: [ google.maps.MapTypeId.ROADMAP, "tehgrayz" ]
             },
             scrollwheel: false
         });
         var e = new google.maps.StyledMapType([ {
             featureType: "all",
             stylers: [ {
                 hue: "#0000ff"
             }, {
                 saturation: -95
             } ]
         }, {
             featureType: "poi",
             elementType: "label",
             stylers: [ {
                 visibility: "off"
             } ]
         } ], {
             name: "Grayscale"
         });
         window.Gmap.mapTypes.set("tehgrayz", e);
         window.Gmap.setMapTypeId("tehgrayz");
         new google.maps.Marker({
             position: new google.maps.LatLng(parseFloat(t[0]), parseFloat(t[1])),
             map: window.Gmap,
             clickable: false,
             icon: {
                 url: a,
                 origin: new google.maps.Point(0, 0)
             }
         });
         new google.maps.Marker({
             position: new google.maps.LatLng(parseFloat(55.7156), parseFloat(37.68178)),
             map: window.Gmap,
             clickable: false,
             icon: {
                 url: "images/map-arrow.png",
                 origin: new google.maps.Point(0, 0)
             }
         });
         new google.maps.Marker({
             position: new google.maps.LatLng(parseFloat(55.717678), parseFloat(37.675938)),
             map: window.Gmap,
             clickable: false,
             icon: {
                 url: "images/metro.png",
                 origin: new google.maps.Point(0, 0)
             }
         });
         var r = [ {
             lat: 55.717894,
             lng: 37.676866
         }, {
             lat: 55.714848,
             lng: 37.679173
         }, {
             lat: 55.715585,
             lng: 37.681705
         }, {
             lat: 55.7156,
             lng: 37.681782
         } ];
         var l = new google.maps.Polyline({
             path: r,
             geodesic: true,
             strokeColor: "#f4b816",
             strokeOpacity: 1,
             strokeWeight: 5
         });
         l.setMap(window.Gmap);
     };
 };