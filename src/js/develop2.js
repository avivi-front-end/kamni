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
		$(this).parent().next().slideToggle();
	});
})();
var sendFile = (function(){
		/*$('.js-send-file').change(function() {
				var filename = $(this).val().split('\\').pop();
				var filePath = $(this).val();
				$('.file-wrap').append('<div class="file-field__text-wrap"><div class="file-field__text file-field__text--done">' + filename + '</div><input type="file" class="file-field__input" name="user_file[]" value=' + filePath + ' /> </div>');
				$(this).val('');
		});*/
		$('.js-send-file').change(function() {
				var names = [];
				for (var i = 0; i < $(this).get(0).files.length; ++i) {
					names.push($(this).get(0).files[i].name);
				}
				console.log($(this));
				$(this).parent().after('<div class="file-wrap"></div>');
				$(this).parent().next('.file-wrap').html(names.join('<br>'));
		});
})();
var ProductSheet = (function(){
	$('.js-sheet-slider').slick({
			slidesToShow: 1,
			arrows:true
	});

	$("[data-fancybox-sheet]").fancybox({
		/*modal: true,*/
		showCloseButton: true,
		/*touch : {
			vertical : false,  // Allow to drag content vertically
			momentum : false   // Continue movement after releasing mouse/touch when panning
		},*/
		afterLoad: function() {
			$('.js-prodsheet-slider').slick({
					dots:false,
					arrows:true,
					slidesToShow: 5,
					slidesToScroll: 1,
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
				}else if($(window).width() > 500)
				{
						$('.s-blog__text p').removeClass('js-cut-text');
				}

		$(window).resize(function(){
				if($(window).width() < 500)
						{
								$('.s-blog__text p').addClass('js-cut-text');
						}else if($(window).width() > 500)
						{
								$('.s-blog__text p').removeClass('js-cut-text');
						}
		});
})();

var editBlock = (function(){
	var block = $('.js-edit-block');
	var callBtn = $('.js-edit');
	var closeBtn = $('.js-closed');

	callBtn.click(function(e){
		e.preventDefault();
		$( block ).clone().prependTo($(this).closest('.feedbacks__item'));
		$(this).closest('.feedbacks__m-cont').stop().slideUp();
		$(this).closest('.dropdown-container').find('.dropdown-btn').removeClass('active');
		$(this).closest('.dropdown-container').addClass('hide-drop').hide();
	});

	$("body").on("click", ".js-closed", function (e) {
		e.preventDefault();
		$(this).parent().parent().detach();
		$('.hide-drop').show();
	});


})();

var vacancy = (function(){
	var link = $('.js-vac-link');

	link.click(function(e){
		e.preventDefault();
		$(this).next().slideToggle();
	});


})();

(function(window, document) {
		'use strict';
		var file = 'images/sprite.svg'; // путь к файлу спрайта на сервере

		if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
		var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
				request,
				data,
				insertIT = function() {
						document.body.insertAdjacentHTML('afterbegin', data);
				},
				insert = function() {
						if (document.body) insertIT();
						else document.addEventListener('DOMContentLoaded', insertIT);
				};
		if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
				data = localStorage.getItem('inlineSVGdata');
				if (data) {
						insert();
						return true;
				}
		}
		try {
				request = new XMLHttpRequest();
				request.open('GET', file, true);
				request.onload = function() {
						if (request.status >= 200 && request.status < 400) {
								data = request.responseText;
								insert();
								if (isLocalStorage) {
										localStorage.setItem('inlineSVGdata', data);
										localStorage.setItem('inlineSVGrev', revision);
								}
						}
				}
				request.send();
		} catch (e) {}
}(window, document));