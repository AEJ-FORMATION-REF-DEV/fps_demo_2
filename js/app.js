//load
$(window).on('load', function() {
    setTimeout(function(){ 
        $('.preloader').addClass('preloader-deactivate');
    }, 3000);
    
});

//top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

//carousel
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        autoplay:true,
        autoplayHover:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    })
    });


//vers le haut
   


    $(document).ready(function() {

        $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
        $(this).text(Math.ceil(now));
        }
        });
        });
        
        });


    $(document).ready(function() {
        $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
        } else {
        $('#toTopBtn').fadeOut();
        }
        });
        
        $('#toTopBtn').click(function() {
        $("html, body").animate({
        scrollTop: 0
        }, 1000);
        return false;
        });
        });

//modal
