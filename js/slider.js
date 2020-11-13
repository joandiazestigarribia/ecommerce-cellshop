// glide js carousel

const slider1 = document.getElementById("glide_1");
const slider2 = document.getElementById("glide_2");
const slider3 = document.getElementById("glide_3");

// hero

if (slider1) {
    new Glide(slider1, {
      type: "carousel",
      startAt: 0,
      autoplay: 5000,
      hoverpause: true,
      perView: 1,
      animationDuration: 800,
      animationTimingFunc: "linear",
    }).mount();
  }

  // latest products

  if (slider2) {
    new Glide(slider2, {
      type: "carousel",
      startAt: 0,
      hoverpause: true,
      perView: 4,
      animationDuration: 800,
      animationTimingFunc: "ease-in-out",
      breakpoints : {
        1200: {
          perView: 3,
        },
        768: {
          perView: 2,
        }
      }
    }).mount();
  }


  // testimonial

  if(slider3) {
    new Glide(slider3, {
      type: "carousel",
      startAt: 0,
      hoverpause: true,
      perView: 1,
      animationDuration: 800,
      animationTimingFunc: "ease-in-out"
    }).mount();  
  }