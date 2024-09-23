const classes = [
  "bg-white",
  "navbar-show",
  "shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
];
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navbar.classList.replace("absolute", "fixed");
    navbar.classList.add(...classes);
  } else {
    navbar.classList.replace("fixed", "absolute");
    navbar.classList.remove(...classes);
  }
});
