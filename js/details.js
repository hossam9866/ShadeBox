$(".owl-carousel").owlCarousel({
  smartSpeed: 900,
  loop: true,
  margin: 10,
  nav: false,
  center: true,
  autoplay: false,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// add plyr to all video elements

document.querySelectorAll("video").forEach((videoElement, i) => {
  let id = "video-number-" + i;
  videoElement.setAttribute("id", id);
  const player = new Plyr(`#video-number-${i}`);
});
