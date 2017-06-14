function dropdowns() {
    var drops = $('.dropdown-container');
    if(drops.length > 0){
        drops.each(function(){
            var but = $(this).find('.dropdown-btn').eq(0);
            var win = $(this).find('.dropdown').eq(0);
            var cont = $(this);
            but.click(function () {

                $(this).toggleClass('active');
                if($(this).hasClass('active')){
                    win.stop().slideDown(200);
                }else{
                    win.stop().slideUp(200);
                }

            });
            $(document).on('click touchstart',function (event){
                var ignore = $('.ignore-miss-click');
                if (!but.is(event.target) && but.has(event.target).length === 0 && !cont.is(event.target) && cont.has(event.target).length === 0 && !ignore.is(event.target) && ignore.has(event.target).length === 0){
                    but.removeClass('active');
                    win.stop().slideUp(200);
                }
            });

        });
        $('.dropdown-close').click(function(){
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

            selectSmartPositioning:false
        });
    }
    var select3 = $('.card__select select');
    if(select3.length > 0){
        select3.styler({
            selectPlaceholder:'Выберете размер',
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
$(document).ready(function () {
    dropdowns();
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
});