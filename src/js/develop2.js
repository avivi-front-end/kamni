/**
 * Created by user on 24.05.2017.
 */

$(document).ready(function() {
    GMapHandler();
    $('.js-sales-slider').slick({
        slidesToShow: 2,
        arrows:true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
        ]
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
});
var sendFile = (function(){
    var fileText = $('.file-field__text');
    $('.js-send-file').change(function() {
        var filename = $(this).val().split('\\').pop();
        console.log(filename);
        fileText.html('');
        fileText.append(filename);
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
         console.log("[Gmap] Не заданы координаты в параметре map_coord. Используем стандартное значение");
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