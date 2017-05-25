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
                if (!but.is(event.target) && but.has(event.target).length === 0 && !cont.is(event.target) && cont.has(event.target).length === 0){
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
    var arrows = $('.catalog .arrow-circle');
    if(but.length > 0){
        but.click(function () {
            $(this).toggleClass('active');
            arrows.trigger('click');
            if($(this).hasClass('active')){
                but.find('span').text('Свернуть все');
            }else{
                but.find('span').text('Развернуть все');
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
}
$(document).ready(function () {
    dropdowns();
    sliderInit();
    catalogShowAll();
});