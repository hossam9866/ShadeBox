let projectsEl = document.querySelector(".projects");
var mixer = mixitup(projectsEl, {
  animation: {
    duration: 250,
    nudge: true,
    reverseOut: false,
    effects: "fade",
  },
});
