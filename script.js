// const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".btn");
const bgTextEl = document.querySelector(".bg-text");

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

btnEl.addEventListener("click", function () {
  const randomColor = `rgba(${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )}, ${randomInt(0, 255)})`;

  document.body.style.backgroundColor = randomColor;
  bgTextEl.textContent = randomColor;
});
