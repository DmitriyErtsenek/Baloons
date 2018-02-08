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

var mainNavClosed = document.querySelector('.main-nav__closed');
var mainNav = document.querySelector('.main-nav');
var toggle = document.querySelector('.main-nav__btn');

mainNav.classList.remove('main-nav--noJs');
mainNav.classList.add('main-nav--closed');

toggle.addEventListener('click', function(){
 if (mainNav.classList.contains('main-nav--closed')) {
  mainNav.classList.remove('main-nav--closed');
 } else {
  mainNav.classList.add('main-nav--closed');
 }
});

$(document).ready(function() {
  $(function() {
    $('#orderForm').validate({
      rules: {
        userSurname: {
          required: true
        },
        userName: {
          required: true
        },
        userTel: {
          required: true,
          digits: true
        },
        userEmail: {
          required: true,
          email: true
        }
      },
      messages: {
        userSurname: {
          required: 'Поле <Фамилия> обязательное для заполнения'
        },
        userName: {
          required: 'Поле <Имя> обязательное для заполнения'
        },
        userTel: {
          required: 'Поле <Телефон> обязательное для заполнения',
          digits: 'Пожалуйста, введите корректный номер телефона'
        },
        userEmail: {
          required: 'Поле <Адрес почты> обязательное для заполнения',
          email: 'Пожалуйста, введите корректный адрес почты'
        }
      }
    });
  });
});





   

