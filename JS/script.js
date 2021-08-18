const drop1 = document.querySelector(".drop1");
const drop2 = document.querySelector(".drop2");
const drop3 = document.querySelector(".drop3");
const tutorials = document.querySelector(".tutorials");
const references = document.querySelector(".references");
const exercises = document.querySelector(".exercises");
const zabdar1 = document.querySelector(".zabdar1");
const zabdar2 = document.querySelector(".zabdar2");
const zabdar3 = document.querySelector(".zabdar3");

drop1.addEventListener("click", function () {
  tutorials.classList.toggle("exp");
  drop1.classList.toggle("exp");
  references.classList.remove("exp");
  drop2.classList.remove("exp");
  exercises.classList.remove("exp");
  drop3.classList.remove("exp");
});
zabdar1.addEventListener("click", function () {
  tutorials.classList.toggle("exp");
  drop1.classList.toggle("exp");
  references.classList.remove("exp");
  drop2.classList.remove("exp");
  exercises.classList.remove("exp");
  drop3.classList.remove("exp");
});
drop2.addEventListener("click", function () {
  references.classList.toggle("exp");
  drop2.classList.toggle("exp");
  tutorials.classList.remove("exp");
  drop1.classList.remove("exp");
  exercises.classList.remove("exp");
  drop3.classList.remove("exp");
});
zabdar2.addEventListener("click", function () {
  references.classList.toggle("exp");
  drop2.classList.toggle("exp");
  tutorials.classList.remove("exp");
  drop1.classList.remove("exp");
  exercises.classList.remove("exp");
  drop3.classList.remove("exp");
});
drop3.addEventListener("click", function () {
  exercises.classList.toggle("exp");
  drop3.classList.toggle("exp");
  tutorials.classList.remove("exp");
  drop1.classList.remove("exp");
  references.classList.remove("exp");
  drop2.classList.remove("exp");
});
zabdar3.addEventListener("click", function () {
  exercises.classList.toggle("exp");
  drop3.classList.toggle("exp");
  tutorials.classList.remove("exp");
  drop1.classList.remove("exp");
  references.classList.remove("exp");
  drop2.classList.remove("exp");
});