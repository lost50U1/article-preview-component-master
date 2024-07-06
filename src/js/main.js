const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const footerContainer = document.querySelector("#footer-container");
const mobileContainer = document.getElementById("footer-container2");
const tooltip = document.querySelector("#tooltip");

btn.addEventListener("click", () => {
  tooltip.classList.toggle("hidden");
});

btn2.addEventListener("click", () => {
  mobileContainer.classList.toggle("hidden");
  footerContainer.classList.toggle("hidden");
  btn2.classList.toggle("hidden");
});

btn3.addEventListener("click", () => {
  mobileContainer.classList.toggle("hidden");
  footerContainer.classList.toggle("hidden");
  btn2.classList.toggle("hidden");
});
