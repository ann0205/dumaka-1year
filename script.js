let index = 0;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

/* slide movement */
function updateSlide() {
  slider.style.transform = `translateX(-${index * 100}vw)`;
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
}

/* arrow keys */
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" && index < slides.length - 1) {
    index++;
    updateSlide();
  }
  if (e.key === "ArrowLeft" && index > 0) {
    index--;
    updateSlide();
  }
});

/* swipe */
let startX = 0;
document.addEventListener("touchstart", e => startX = e.touches[0].clientX);
document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && index < slides.length - 1) index++;
  if (endX - startX > 50 && index > 0) index--;
  updateSlide();
});

/* tap photo → unfold paper */
document.querySelectorAll(".memory-img").forEach(img => {
  img.addEventListener("click", () => {
    img.closest(".memory").classList.toggle("active");
  });
});

