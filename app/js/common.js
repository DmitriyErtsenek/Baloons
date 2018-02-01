$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    singleItem:true, //Выводится один слайд
    touchDrag: false, //Запрет на пролистывание слайдов по нажатию на сам слайд (моб.устройства)
    loop:true, //Зацикливаем слайдер
    margin:10, //Отступ между блоками если выводите больше 1
    nav:true, //Навигация
    autoHeight:true,  // автоматическое изменение высоты
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:8000, //Время смены слайда
    responsive:{ //Адаптация в зависимости от разрешения экрана
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });
});


ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init(){     
    myMap = new ymaps.Map("map", {
      center: [59.93863106, 30.32305450],
      zoom: 17
    });

    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
      hintContent: 'Mishka',
      iconLayout: 'default#image',
      iconImageHref: '../img/icon-map-pin.svg',
      iconImageSize: [66, 100],
      iconImageOffset: [-25, -102]
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.controls
      .remove('zoomControl')
      .remove('trafficControl')
      .remove('typeSelector')
      .remove('rulerControl')
      .remove('fullscreenControl')
      .remove('routeButtonControl')
      .remove('searchControl')
      .remove('geolocationControl');
};



   

