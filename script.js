// Smooth animation while scrolling

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 50);
});