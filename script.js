const PETAL_COLORS = [
  "#ff6f91",
  "#ff9671",
  "#ffc75f",
  "#f9f871",
  "#845ec2",
  "#00c9a7",
  "#4d8076",
  "#d65db1"
];

function randomColor(excluding) {
  const choices = PETAL_COLORS.filter((c) => c !== excluding);
  return choices[Math.floor(Math.random() * choices.length)];
}

document.addEventListener("DOMContentLoaded", () => {
  const petals = document.querySelectorAll(".petal");

  petals.forEach((petal) => {
    petal.addEventListener("click", () => {
      const current = petal.getAttribute("fill");
      const next = randomColor(current);
      petal.setAttribute("fill", next);
    });
  });
});
