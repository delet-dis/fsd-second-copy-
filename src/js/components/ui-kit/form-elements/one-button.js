document.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelectorAll(".heart-block");
  heart.forEach((h) => {
    h.addEventListener("click", () => {
      if (h.classList.contains("heart-block_active")) {
        h.classList.remove("heart-block_active");
        let span=h.querySelector("span")
        span.textContent= parseInt(span.textContent, 10) - 1;
      } else {
        h.classList.add("heart-block_active");
        let span=h.querySelector("span")
        span.textContent= parseInt(span.textContent, 10) + 1;
      }
    });
  });
});
