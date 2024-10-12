const navbarClasses = [
  "bg-white",
  "navbar-show",
  "shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
];
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navbar.classList.replace("absolute", "fixed");
    navbar.classList.add(...navbarClasses);
  } else {
    navbar.classList.replace("fixed", "absolute");
    navbar.classList.remove(...navbarClasses);
  }
});


const borderBottomClasses = ["!border-[#606060ff]", "!border-b-[3px]", "font-bold"];
const tops = document.querySelectorAll(".top");
const topItems = document.querySelectorAll(".top-items");

tops.forEach((top) => {
  const topName = top.dataset.name
  top.addEventListener("click", () => {
    top.classList.add(...borderBottomClasses);
    tops.forEach((t) => {
      if (t !== top) {
        t.classList.remove(...borderBottomClasses);
      }
    });
    topItems.forEach(items => {
      if (items.dataset.name === topName) {
        items.classList.replace("hidden", "flex");
      }else{
        items.classList.replace("flex", "hidden");
      }
    })
  });
});
