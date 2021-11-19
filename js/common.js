// go to top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { 
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() { 
    $('body,html').animate({
        scrollTop : 0
    }, 10);
});

 

// menu
$(".menu-toggle").click(function() {
    $(".menu").slideToggle(500);
});

// blog slider
$('.banner-slider').slick({
  dots: true, 
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow:1,
   lazyLoad: 'ondemand',
   autoplay: true,
  autoplaySpeed:4000,
  slidesToScroll: 1
});


// service slider
$('.service-slider').slick({
  dots: false, 
  arrows:true ,
  infinite: false,
  speed: 300,
  slidesToShow:3,
   lazyLoad: 'ondemand',
   autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1, 
  responsive: [
    {
      breakpoint:991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        dots: true,
        arrows:false,
        slidesToShow:1,
        slidesToScroll: 1
      }
    }
  ]
});



// tech-slider
$('.tech-slider').slick({
  dots: false, 
  arrows:true , 
  infinite: false,
  speed: 300,
  slidesToShow:4,
   lazyLoad: 'ondemand',
   autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1, 
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:767,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1,
        dots: true, 
        arrows:false
      }
    },
    {
      breakpoint:450,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        dots: true, 
        arrows:false
      }
    }
  ]
});


// testimonial slider
$('.testimonial-slider').slick({
  dots: false, 
  arrows:true , 
  infinite: false,
  speed: 300,
  slidesToShow:3,
   lazyLoad: 'ondemand',
   autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1, 
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow:1,
        dots: true, 
        arrows:false , 
        slidesToScroll: 1
      }
    },
  ]
});


// clients logos
$('.client-slider').slick({
  dots: false, 
  arrows:false, 
  infinite: false,
  speed: 300,
  slidesToShow:4,
   // lazyLoad: 'ondemand',
   autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1, 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow:3,
        slidesToScroll: 1
      }
    }
  ] 
});


// popup brn
$(window).scroll(function() {
  if ($(this).scrollTop() > 200){  
      $('header').addClass("sticky");
       $('body').addClass("scrolled");
  }
  else{
      $('header').removeClass("sticky");
       $('body').removeClass("scrolled");
  }
});


// lazy load
setTimeout(function(){ 
   $(function(){
       $("img[data-src]").attr("src", function(){ return $(this).data("src"); });
   });
}, 10); 






// ifreame load
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
window.addEventListener('scroll', function(event) {
var iframeLLVidContainer = document.querySelector(".iframe-lazy-load");
var iframeLLVids = document.querySelectorAll(".iframe-lazy-load");
var iframeVid = document.querySelector(".iframe-lazy-load iframe");

if(isInViewport(iframeLLVidContainer) && iframeVid == null) {
  iframeLLVids.forEach(function(videoDiv){ 
  var iframeVid = document.querySelector(".iframe-lazy-load iframe");
    var src = videoDiv.getAttribute("data-src");
    var front = '<iframe src=';
    var back = '" frameborder="0" allowfullscreen="allowfullscreen"></iframe>';
    videoDiv.innerHTML = (front + src + back);
  });
}
});


var windowWidth = $(window).width();
$('.banner').mousemove(function(event){
  var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
  var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
  $('.mousemove').css('margin-left', moveX + 'px');
  $('.mousemove').css('margin-top', moveY + 'px');
});  


var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450).removeClass("hided");
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide().addClass("hided");
  }
  $btns.removeClass('active');
  $(this).addClass('active');
});


$('.accept-btn').click(function(){
  $('.cookies-sec').hide();
});