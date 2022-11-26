
function myFunction() {
  var x = document.getElementById("myLinks");
  console.log(x);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// owl carousel main section
$("#owl-carousel1").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
  
  // owl-carousel - Team Section

  $('#owl_carousel2').owlCarousel({
    loop:true,
    margin: 15,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
})
// owl-carousel - Testimonials Section

$('#owl_carousel3').owlCarousel({
  loop:true,
  margin:0,
  dots: false,
  responsiveClass:true,
  autoplay : 200,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:true
      },
      1000:{
          items:1,
          nav:true,
          loop:false
      }
  }
})
// owl-carousel - Client Section

// $('#owl_carousel').owlCarousel({
//   loop:true,
//   margin:0,
//   dots: false,
//   responsiveClass:true,
//   autoplay : 100,
//   responsive:{
//       0:{
//           items:2,
//           nav:false
//       },
//       600:{
//           items:3,
//           nav:false
//       },
//       1000:{
//           items:5,
//           nav:false,
//           loop:false
//       }
//   }
// })
