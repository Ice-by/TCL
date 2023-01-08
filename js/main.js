AOS.init({
    once: true,
});

$(function(){ 
  // $('.btn[data-form=present]').click(function () {
  //   $('#ModalPresent .form__title').text($(this).attr('data-rename'));
  //   $('#ModalPresent input[name=title]').val($(this).attr('data-rename'));
  // })

  $('.product__item[data-form=present]').click(function () {
    $('#ModalPresent .modal__title p').text($(this).attr('data-rename'));
    $('#ModalPresent input[name=title]').val($(this).attr('data-rename'));
  });



  // Mask tel number:  
  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  $("input[type=tel]").on('click', function(){
    $(this).setCursorPosition(5);
  }).mask("+375(99)999-99-99");

});


let scrollpos = window.scrollY;

const mobileMenu = document.querySelector(".menu__btn--2");
const scrollChange = 180;

const add_class_on_scroll = () => mobileMenu.classList.add("on");
const remove_class_on_scroll = () => mobileMenu.classList.remove("on");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
});




var swiper1 = new Swiper(".topscreen__slider", {
    // slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    effect: "fade",
    allowTouchMove: false,

    navigation: {
        nextEl: ".topscreen__slider-next",
        prevEl: ".topscreen__slider-prev",
    },
    pagination: {
        el: ".topscreen__slider-pagination",
        clickable: true,
    },
});

var swiper2 = new Swiper(".gallery__slider", {
    speed: 400,
    // slidesPerView: 3,
    // spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".gallery__slider-pagination",
    clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      
      960: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
});

// $('[data-fancybox="gallery1"]').fancybox({  
// 	// Options will go here
// });

Fancybox.bind('[data-fancybox="gallery1"]', {
  dragToClose: false,

  Toolbar: false,
  closeButton: "top",

  Image: {
    zoom: false,
  },

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
    "Carousel.change": (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
  },
});






// Burger-menu interaction
let burger1 = document.querySelector(".menu__btn--1");
let burger2 = document.querySelector(".menu__btn--2");
let menu1 = document.querySelector(".menu--1");
let menu2 = document.querySelector(".menu--2");
let menuItem = document.querySelectorAll(".menu__item");
let body = document.querySelector(".body");

burger1.onclick = function() {  
  burger1.classList.toggle("active");
  burger2.classList.toggle("active");
  menu1.classList.toggle("active");  
  body.classList.toggle("overflow-hidden");
}
burger2.onclick = function() {  
  burger1.classList.toggle("active");
  burger2.classList.toggle("active");
  menu1.classList.toggle("active"); 
  body.classList.toggle("overflow-hidden"); 
}

for (i = 0; i < menuItem.length; i++){
  menuItem[i].addEventListener("click", function() {
    burger1.classList.remove("active");
    menu1.classList.remove("active"); 
    burger2.classList.remove("active");
    // menu2.classList.remove("active");
    body.classList.remove("overflow-hidden"); 
  });
};

// Smooth scrolling on anchors:
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};




// $(window).on('scroll', function () {
//   if ($(this).scrollTop() > 10) {
//     $('.mobile-menu').addClass("active");      
//   } else {
//     $('.mobile-menu').removeClass("active");      
//   }
// });

// window.addEventListener('scroll', function(e) {
//   if (this.oldScroll > this.scrollY) {
//     console.log('up');
//   } else {
//     console.log('down');
//   }
//   this.oldScroll = this.scrollY;
// }, false);



AOS.refresh();
