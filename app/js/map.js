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
      iconImageHref: 'img/icon-map-pin.svg',
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

    myMap.behaviors
      .disable('drag');
};