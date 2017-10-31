/**
 * Created by user on 24.05.2017.
 */
(function(){
	$(".js-cut-text").dotdotdot({
			ellipsis	: '...',
			wrap		: 'word',
			fallbackToLetter: 'letter',
			after		: null,
			watch		: true,
			height		: null,
			tolerance	: 0
	});
	$('.oneHeight').matchHeight();
	$('.js-last').matchHeight();

	if($(window).width() <= 992){
		
	} else if($(window).width() > 992){
		/* $('.publications__content').slick('unslick'); */
	}

	$('.publications__content').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: "unslick"
			},
			{
				breakpoint: 992,
				settings: {
					unslick: false,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 700,
				settings: {
				slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
				centerMode: true,
				slidesToShow: 1,
				arrows: false,
				centerPadding: '10px'
				}
			},
			]
	});

})();

$(document).ready(function() {
	GMapHandler();

	$('.js-sales-slider').slick({
			slidesToShow: 2,
			arrows:true
	});

	$('.js-col-slider').slick({
			slidesToShow: 6,
			arrows:true,
			responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 556,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1
						}
					}
			]
	});

	$('.js-art-slider').slick({
			slidesToShow: 4,
			arrows:true,
			infinite: false,
			responsive: [
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 3 
						}
					},
					{
						breakpoint: 664,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 450,
						settings: {
							slidesToShow: 1
						}
					}
			]
	});
});
var addDelList = (function(){
	var btn = $('.js-del-list');

	btn.click(function(e){
		e.preventDefault();
		$(this).next().slideToggle();
	});
})();
var filterAlph = (function(){
	var $letter = $('.js-letter');
	var $input = $('.js-alph-input');
	var $close = $('.js-alph-close');
	var $reset = $('.js-alph-reset');
	$letter.on('click', function(){
		$(this).parent().toggleClass('active');
	});
	$close.on('click', function(){
		if($(this).parent().find($input).not(":checked")){
			$(this).parent().parent().hide();
		}
	});
	$reset.on('click', function(e){
		e.preventDefault();
		$('.alph-form__item').show();
		$('.alph-form__item').removeClass('active');
		$input.prop('checked',false);
	});
})();
var filterDrop = (function(){
	var $btn = $('.js-sw-trg');
	var $reset = $('.js-check-reset');

	$reset.on('click', function(e){
		e.preventDefault();
		$(this).parent().find('.aside-drop-menu-check__input').prop('checked',false);
	});

	$btn.on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parent().parent().next().slideToggle();
	});
})();
var sendFile = (function(){
		/*$('.js-send-file').change(function() {
				var filename = $(this).val().split('\\').pop();
				var filePath = $(this).val();
				$('.file-wrap').append('<div class="file-field__text-wrap"><div class="file-field__text file-field__text--done">' + filename + '</div><input type="file" class="file-field__input" name="user_file[]" value=' + filePath + ' /> </div>');
				$(this).val('');
		});*/
		$("body").on("change", ".js-send-file", function (e) {
			var names = [];
				for (var i = 0; i < $(this).get(0).files.length; ++i) {
					names.push($(this).get(0).files[i].name);
				}
				$(this).parent().next('.file-wrap').detach();
				$(this).parent().after('<div class="file-wrap"></div>');
				$(this).parent().next('.file-wrap').html(names.join('<br>'));
		});
		/*$('.js-send-file').change(function() {
				var names = [];
				for (var i = 0; i < $(this).get(0).files.length; ++i) {
					names.push($(this).get(0).files[i].name);
				}
				$(this).parent().after('<div class="file-wrap"></div>');
				$(this).parent().next('.file-wrap').html(names.join('<br>'));
		});*/
})();
var ProductSheet = (function(){
	$('.js-sheet-slider').slick({
			slidesToShow: 1,
			arrows:true
	});

	$("[data-fancybox-sheet]").fancybox({
		showCloseButton: true,
		afterLoad: function() {
			$('.js-prodsheet-slider').slick({
					dots:false,
					arrows:true,
					slidesToShow: 5,
					slidesTo: 1,
					responsive: [
							{ breakpoint: 1150, settings: {  slidesToShow: 5} },
							{ breakpoint: 992, settings: {  slidesToShow: 4} },
							{ breakpoint: 750, settings: {  slidesToShow: 3} },
							{ breakpoint: 600, settings: {  slidesToShow: 2} },
							{ breakpoint: 450, settings: {  slidesToShow: 1} }
					]
			});
		},
		afterClose: function(){
			$('.js-prodsheet-slider').slick('unslick');
		}
	});
})();
var videoPop = (function(){
		var $targetBtn = $('.js-target-btn');
		var $tab = $('.js-tab');
		var $videoWrapper = $('.js-video-wrap');

		$tab.on('click touchstart', function(e){
				e.preventDefault();
				if($(this).hasClass('active')){
						return false;
				} else {
						$tab.removeClass('active');
						$(this).addClass('active');
						var $tabNumber = $(this).index();
						$videoWrapper.html('');
						var $videoLink = $tab.eq($tabNumber).attr('data-video');
						$videoWrapper.append('<iframe width="100%" height="100%" src="' + $videoLink + '" frameborder="0" allowfullscreen></iframe>');
				}
		});

		$targetBtn.on('click ', function(e){
				e.preventDefault();
				var $targetNum = $(this).parent().index();
				console.log($targetNum);
				$tab.removeClass('active');
				$videoWrapper.html('');
				$tab.eq($targetNum).addClass('active');
				var $videoLink = $tab.eq($targetNum).attr('data-video');
				$videoWrapper.append('<iframe width="100%" height="100%" src="' + $videoLink + '" frameborder="0" allowfullscreen></iframe>');
		});

})();
var tabsLk = (function(){
	var tab = $('.js-tab-lk');

	tab.click(function(e){
		e.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');
	});
})();
var showMoreItem = (function(){
		var $btn = $('.js-show-link');
		var $item = $('.prod-card__list .hidden');

		if($btn.length > 0){
				$btn.click(function (e) {
						e.preventDefault();
						$(this).toggleClass('active');
						if($(this).hasClass('active')){
								$item.show();
								$btn.text('Скрыть');
						}else{
								$item.hide();
								$btn.text('Показать еще');
						}
				});
		}
})();
var modalM = (function(){
		var input = $('.js-dropm');
		var hide = $(this).parent().parent().next();

		input.on('change', function(){
				$('.cancel-modal__hidden').removeClass('active');
				$('.cancel-modal__hidden').slideUp();
				if($('.js-dropm:checked').hasClass('js-act')){
								$('.js-act:checked').parent().parent().next('.cancel-modal__hidden').addClass('active');
								$('.js-act:checked').parent().parent().next('.cancel-modal__hidden').slideDown();;
				}else{
								$('.cancel-modal__hidden').removeClass('active');
								$('.cancel-modal__hidden').slideUp();
				}
		});
})();
var modalPhone = (function(){
		var btn = $('.js-show-number');

		btn.click(function(e){
				e.preventDefault();
				$(this).next().show();
				$(this).hide();
		});

})();
var search = (function(){
		var searchM = $('.js-search-m');
		var close = $('.js-close');

		searchM.keyup(function(){
				if($(this).val().length > 0){
						close.show();
				} else if($(this).val().length === 0){
						close.hide();
				}
				close.click(function(){
						$(this).hide();
				});
		});

		$(window).scroll(function(){
				var topLine = $('.js-search');
				if($(this).scrollTop() >= 170 ){
						topLine.addClass("active");
				} else if($(this).scrollTop() <= 170 ){
						topLine.removeClass("active");
				}
		});

		if($(window).width() < 500){
			$('.s-blog__text p').addClass('js-cut-text');
		}else if($(window).width() > 500){
			$('.s-blog__text p').removeClass('js-cut-text');
		}
		$(window).resize(function(){
				if($(window).width() < 500){
					$('.s-blog__text p').addClass('js-cut-text');
				}else if($(window).width() > 500){
					$('.s-blog__text p').removeClass('js-cut-text');
				}
		});
})();

var editBlock = (function(){
	var block = $('.js-edit-block');
	var callBtn = $('.js-edit');
	var closeBtn = $('.js-closed');
	var parent = $('.js-edit').closest('.feedbacks__item');
	var photos = parent.find('.feedbacks__photos').find('.feedbacks__img-wrap');
	var close = $('.modal-edit__close');

	callBtn.click(function(e){
		e.preventDefault();
		var $this = $(this);
		var photosWrap = $('.modal-edit__photos');
		var active = $('.js-edit-active');
		var link = active.find('.modal-edit__photos a');
		var rank = $(this).closest('.feedbacks__top').find('.feedbacks__rank span').attr('class');
		var text = $(this).closest('.feedbacks__item').find('.feedbacks__text p').text();
		var title = $this.closest('.feedbacks__item').find('.feedbacks__title a').text();
		var video = $this.closest('.feedbacks__item').find('iframe').attr('src');
		$( block ).clone().addClass("js-edit-active").prependTo($(this).closest('.feedbacks__item'));
		setTimeout(function() {
			var popRank = $('.js-edit-active').find('.feedbacks__rank span');
			var i;
			console.log(rank);
			/* console.log(popRank.eq(1).find('span').attr('class')); */
			/* for (i = 0; i < popRank.length; ++i) {
				if(popRank.eq(i).text() === rank.text()){
					popRank.eq(i).prev().prop('checked', true);
					popRank.eq(i).addClass('active');
					break;
				}
			} */
			for (i = 0; i < popRank.length; ++i) {
				if(popRank.eq(i).hasClass(rank)){
					console.log(popRank.eq(i));
					popRank.eq(i).parent().prev().prop('checked', true);
					popRank.eq(i).addClass('active');
					break;
				}
			}
			$('.js-edit-active').find('.feed-form__media').val(video);
			$('.js-edit-active').find('.offer-form__textarea').val(text);
			active.find(photosWrap).addClass('js-photos');
			active.find('.offer-form__textarea').addClass('js-text-area');
			active.find(photosWrap).addClass('js-photos');
			$('.js-edit-active').find('h4 a').text(title);
			$this.closest('.feedbacks__item').find(' .feedbacks__photos').find('.feedbacks__img-wrap').clone().appendTo($('.js-edit-active .modal-edit__photos'));
			$this.closest('.feedbacks__item').find('.feedbacks-hidden .feedbacks-hidden__input').clone().appendTo($('.js-edit-active .feedbacks-inputs'));
			$('.js-edit-active').find('.modal-edit__photos .feedbacks__img-wrap').append('<span class="modal-edit__close"></span>');
		}, 500);
		$(this).closest('.feedbacks__m-cont').stop().slideUp();
		$(this).closest('.dropdown-container').find('.dropdown-btn').removeClass('active');
		$('.dropdown-container').hide();
	});


	$("body").on("click", ".js-closed", function (e) {
		e.preventDefault();
		$(this).parent().parent().detach();
		$('.dropdown-container').show();
	});

	$("body").on("click", ".modal-edit__close", function (e) {
		e.preventDefault();
		$(this).parent().detach();
	});


})();

var vacancy = (function(){
	var link = $('.js-vac-link');

	link.click(function(e){
		e.preventDefault();
		$(this).next().slideToggle();
	});


})();

var goTo = (function(){

	$('.js-scroll-link').click(function(e){
				e.preventDefault();
				var href = $(this).attr('href');
				var target = $(href).offset().top-65;
				$('body,html').animate({scrollTop: target}, 1500);
		});
})();

var sliderReview = (function(){
	var slider = $('.js-slider-big');
	var items = $('.about-slider__thumbs-item');
	var butt = $('.about-slider__thumbs-item');

	slider.slick({
		slidesToShow: 1,
		arrows:true,
		responsive: [
			{
			  breakpoint: 550,
			  settings: {
				centerMode: true,
				slidesToShow: 1,
				arrows: false,
				centerPadding: '10px'
			  }
			}
		]
	});

	items.click(function () {
		var ind = $(this).index();
		$(this).parent().prev(slider).slick('slickGoTo', ind);
		$(this).parent().find(butt).removeClass('show');
		$(this).parent().find(butt).eq(ind).addClass('show');
	});

	slider.on('afterChange', function(event, slick, currentSlide) {
		$(this).next().find(butt).removeClass('show');
		$(this).next().find(butt).eq(currentSlide).addClass('show');
    });

})();
var lkAdd = (function(){
	var 
		but = $('.js-lk-add'),
		modal = $('.js-lk-modal'),
		close = $('.js-lk-closed'),
		select = $(this).closest('.od-check').find('select')
	;
	

	$("body").on("click", '.js-lk-closed' , function (e) {
		e.preventDefault();
		$(this).parent().parent().slideUp();
		$(this).closest('.od-check').find(but).show();
		var $this = $(this).parent().parent();
		setTimeout(function() {
			$this.detach();
		}, 500);
	});

	$("body").on("click", '.js-lk-add' , function (e) {
		e.preventDefault();
		$(this).hide();
		modal.clone().removeClass('.js-lk-modal').hide().appendTo($(this).closest('.od-check'));
		$(this).closest('.od-check').find('.feed-form').slideDown();
		var select = $(this).closest('.od-check').find('select');
		var links = $(this).closest('.od-check').find('.od-check__long a');
		console.log(links);
		select.html('');
		for (var i = 0; i < links.length; i++) {
			select.append('<option value="' + links.eq(i).attr('data-idproduct') + '">' + links.eq(i).text() + '</option>')
		}
		setTimeout(function() {
			select.styler({
				selectSmartPositioning:false,
				selectSearchLimit: 4
			});
		}, 100);
	});
})();
/* var menuLength = (function(){
	var 
		menu = $('.aside-drop-menu__item.active').next().children().children('.aside-drop-menu-submenu__item:not(.aside-drop-menu-submenu__wrap)'),
		menuWrap =$('.aside-drop-menu__item.active').next(),
		subMenu = $('.aside-drop-menu-submenu__link.active').parent().next().children().children(),
		subMenuWrap =$('.aside-drop-menu-submenu__link.active').parent().next()
	;

	if(menu.length > 5){
		menu.hide();
		menuWrap.addClass('hidden').append('<a href="#" class="button menu-show-more"><span>Show more</span></a>')
		for (var i = 0; i < 5; i++) {
			menu.eq(i).show();
		}
	}

	if(subMenu.length > 5){
		subMenu.hide();
		subMenuWrap.addClass('hidden').append('<a href="#" class="button menu-show-more-sub"><span>Show more</span></a>')
		for (var i = 0; i < 5; i++) {
			subMenu.eq(i).show();
		}
	}

	$("body").on("click", '.menu-show-more-sub' , function (e) {
		e.preventDefault();
		subMenuWrap.removeClass('hidden');
		subMenu.show();
		$(this).detach();
	});

	$("body").on("click", '.menu-show-more	' , function (e) {
		e.preventDefault();
		menuWrap.removeClass('hidden');
		menu.show();
		$(this).detach();
	});

})(); */

var searchList = (function(){
	var list = $('.catalogue-full-list__list');
	var listWidth = list.find('li');

	if($(window).width() <= 600){
		for(var i = 0; i < list.length; i++){
			if(list.eq(i).find('li').length > 10){
				list.eq(i).parent().addClass('hidden').append('<a href="#" class="button js-more-search catalogue-full-list__btn"><span>Show more</span></a>')
				var num = list.eq(i).find('li');
				num.hide();
				for (var b = 0; b < 10; b++) {
					num.eq(b).show();	
				}
			}
		}
	}

	$("body").on("click", '.js-more-search	' , function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.removeClass('js-more-search');
		$this.addClass('js-more-close');
		$(this).addClass('close');
		$(this).find('span').text('hide');
		$(this).parent().find('.catalogue-full-list__list li').show();
	});
	
	$("body").on("click", '.js-more-close' , function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.find('span').text('Show more');
		var butList = $this.parent().find('.catalogue-full-list__list li');
		butList.hide();
		for (var b = 0; b < 10; b++) {
			butList.eq(b).show();	
		}
		$this.removeClass('js-more-close');
		$this.addClass('js-more-search');
	});
}());

var mainCategory = (function(){
	var 
		toggle = $('.popcat__title');
	;

	toggle.click(function(){
		$(this).parent().toggleClass('open');
		$(this).next().slideToggle();
	});
})();

var basketCheck = (function(){
	var
		checkBasket = $('.basket__items .complect__checkbox').find('input'),
		checkDefer = $('.defer__items .complect__checkbox').find('input'),
		basket = $('.basket__menu'),
		defer = $('.defer__menu'),
		info = $('.mover__info')
	;

	checkBasket.click(function(){
		if($(window).width() <= 480){
			var checkedBasket = $('.basket__items .complect__checkbox input:checked');
			if(checkedBasket.length >= 1){
				basket.addClass('show');
			} else{
				basket.removeClass('show');
			}
		}
	});

	checkDefer.click(function(){
		if($(window).width() <= 480){
			var checkedDefer = $('.defer__items .complect__checkbox input:checked'); 
			if(checkedDefer.length >= 1){
				defer.addClass('show');
			} else{
				defer.removeClass('show');
			}
		}
	});

	$('.basket__menu .mover__info').bind("DOMSubtreeModified",function(){
		if($(this).text() === 'Выбрано 0 товаров'){
			$(this).closest('.mover').removeClass('show');
		}
	});

	$('.defer__menu .mover__info').bind("DOMSubtreeModified",function(){
		if($(this).text() === 'Выбрано 0 товаров'){
			$(this).closest('.mover').removeClass('show');
		}
	});

})();

var mobileLike = (function(){
	var button = $('.tovar-mobile__like');
	
	button.click(function(){
		$(this).toggleClass('active');
	});
})();

var stickySidebar = (function(){

	$(".sticky").stickySidebar({
		topSpacing: 0,
		bottomSpacing: 800,
		minWidth: 900
	});
})();

var  selectCheck = (function(){
	$.fn.toggleDisabled = function() {
		return this.each(function() {
			this.disabled = !this.disabled;
		});
	};
	var
		input = $('.js-select-check');
		t=1;
	;

	input.on('change', function(){
		if($(this).hasClass('with-select')){
			$(this).closest('.order-payment__row').find('select').toggleDisabled().trigger('refresh');
			t=1;
		} else if(t === 1){
			$('.with-select').closest('.order-payment__row').find('select').toggleDisabled().trigger('refresh');
			t++;
		}
	});

})();

var buyOneClick = (function(){
	var btn = $('.js-one-click');

	btn.click(function(e){
		e.preventDefault();
		$(this).next().toggleClass('active');
	});
})();