var owl = $(".owl-carousel");
owlOptions = {
  smartSpeed: 900,
  loop: true,
  margin: 10,
  nav: false,
  center: false,
  autoplay: false,
  autoplayTimeout: 4000,
  onDragged: onDragged,
  onDrag: onDrag,
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
};

owl.owlCarousel(owlOptions);

// scroll prevent on input range

function onDrag(event) {}
function onDragged(event) {
  // owl.trigger("next.owl.carousel");
}

// add plyr to all video elements

document.querySelectorAll("video").forEach((videoElement, i) => {
  let id = "video-number-" + i;
  videoElement.setAttribute("id", id);
  const player = new Plyr(`#video-number-${i}`);
});

// set height to team element as first column height
function setTeamHeight() {
  // Get the heights of the first and second columns
  let column1Height = document.querySelector(
    ".details .left-side"
  ).clientHeight;
  let column2 = document.querySelector(".details .team-side");

  // Set the height of the second column to match the first column's height
  column2.style.height = column1Height + "px";
}
setTeamHeight();
window.addEventListener("resize", function () {
  setTeamHeight();
});
//hide popup when click outside

document.addEventListener("click", (event) => {
  if (popup.classList.contains("d-flex") && !popup.contains(event.target)) {
    popup.classList.remove("d-flex");
  }
});

// on press on gallery's image => open popup

const popup = document.getElementById("popup");
document.querySelectorAll(".gallery img").forEach((imageElement, i) => {
  let moved = false;
  const downListener = () => {
    moved = false;
  };
  const moveListener = () => {
    moved = true;
  };
  const upListener = () => {
    if (moved) {
    } else {
      setTimeout(() => {
        // popup.querySelector(".content").innerHTML = "";
        // popup
        //   .querySelector(".content")
        //   .appendChild(imageElement.cloneNode(true));
        document
          .querySelectorAll(".popup .carousel-item")
          .forEach((carouselItem, carouselIndex) => {
            if (carouselIndex == i) {
              carouselItem.classList.add("active");
            } else {
              carouselItem.classList.remove("active");
            }
          });
        popup.classList.add("d-flex");
      }, 1);
    }
  };

  // Attach listeners
  imageElement.addEventListener("mousedown", downListener);
  imageElement.addEventListener("mousemove", moveListener);
  imageElement.addEventListener("mouseup", upListener);
});

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
  popup.classList.remove("d-flex");
});

// add content to popup

document.querySelectorAll(".gallery img").forEach((itemElement) => {
  let carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  carouselItem.appendChild(itemElement.cloneNode(true));
  popup.querySelector(".content").appendChild(carouselItem);
});
