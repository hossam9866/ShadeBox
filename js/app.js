//fixed top to header nav bar

function setNavToTop() {
  const navbar = document.querySelector("header");
  const content = document.querySelector("#content");

  if (window.scrollY > navbar.offsetHeight + 50) {
    navbar.classList.add("fixed-top", "fixed-top-animation");
    content.style.paddingTop = navbar.offsetHeight + "px";
  } else {
    navbar.classList.remove("fixed-top", "fixed-top-animation");
    content.style.paddingTop = "0";
  }
}
setNavToTop();

window.onscroll = function () {
  setNavToTop();
};
