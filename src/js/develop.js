function dropdowns() {
    var drops = $('.dropdown-container');
    if(drops.length > 0){
        drops.each(function(){
            var but = $(this).find('.dropdown-btn');
            var win = $(this).find('.dropdown');
            var cont = $(this);
            but.click(function () {
                $(this).toggleClass('active');
                if($(this).hasClass('active')){
                    win.stop().slideDown(200);
                }else{
                    win.stop().slideUp(200);
                }
            });
        });
    }
}
$(document).ready(function () {
    dropdowns();
});