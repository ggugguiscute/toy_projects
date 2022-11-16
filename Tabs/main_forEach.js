const btns = document.querySelectorAll(".btns .btn");
const panels = document.querySelectorAll(".panels .panel");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    btns.forEach((item) => {
      item.classList.remove("active");
    });
    panels.forEach((panel) => {
      panel.style.display = "none";
    });
    btns[idx].classList.add("active");
    panels[idx].style.display = "block";
  });
});
