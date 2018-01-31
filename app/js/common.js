$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    singleItem:true,
    touchDrag: false,
    loop:true, //Зацикливаем слайдер
    margin:10, //Отступ от картино если выводите больше 1
    nav:true, //Отключил навигацию
    autoHeight:true,
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