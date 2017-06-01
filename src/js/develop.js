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
$(document).ready(function () {
    dropdowns();
    sliderInit();
    catalogShowAll();
    mobMenu();
    footerhow();
});