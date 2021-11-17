AOS.init({ disable: 'mobile'}); //animation on slide

// collapsed nav
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  console.dir(Window.scrollY);
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-example").style.top = "0";
  } else {
    document.getElementById("navbar-example").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

// about-value
$(".value").hide();
var pastshowValue =-1;
$( ".firstCircle" ).hover(function() {
    $( ".value" ).eq( pastshowValue ).stop( true, true ).fadeIn();
    console.log(this);
    if(pastshowValue != -1) { //not first time to hover
        $( ".value" ).eq( pastshowValue ).hide();
    } 
    var hoveredIndex = $(".firstCircle").index(this);
    console.log("현재 "+hoveredIndex);
    if(hoveredIndex != -1){
        $( ".value" ).hide();
        $( ".value" ).eq( hoveredIndex ).fadeIn(2500);
        pastshowValue = hoveredIndex;
    }
});

// border-bottom border-dark
//scroll timeline
const navObject = $('nav.navbar');
$(window).ready(function() {
  dynamicClass();
})
$( window ).resize(function() {
  dynamicClass();
});
function dynamicClass() {
  if ($(window).width() < 992) {
    if ($( ".timeline-item" ).hasClass('mb-4') === false) {
      $( ".timeline-item" ).each(function( i ) {
        $( this ).addClass('mb-4');
      });
    }
    if (navObject.hasClass('border-bottom')){
       navObject.removeClass('border-bottom border-dark');
    }
  } 
  else {
    if ($( ".timeline-item" ).hasClass('mb-4')) {
      $( ".timeline-item" ).each(function( i ) {
        $( this ).removeClass('mb-4');
      });
    }
    
    if (navObject.hasClass('border-bottom') === false){
      navObject.addClass('border-bottom border-dark');
    }
  }
}

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if($(".contactBox").hasClass('.border-end')) {
      console.log('border')
      $('.contactBox').removeClass('.border-end').addClass('.border-bottom');
    }

    
    
  	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}

  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

   

  } else {
    if($(".contactBox").hasClass('.border-bottom')) {
      $('.contactBox').removeClass('.border-bottom').addClass('.border-end');
    }
   
   
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });



  }
  
  sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });


});

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 5000,
  reset: true
});

// scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
})

var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    dataSpyList.forEach(function (dataSpyEl) {
    bootstrap.ScrollSpy.getInstance(dataSpyEl)
        .refresh()
})

/*===== scroll nav =====*/

//swiper(for mobile)
var swiper = new Swiper("#mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",

  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".profileForMobile", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  
  scrollbar: {
    el: ".swiper-scrollbar",

  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
