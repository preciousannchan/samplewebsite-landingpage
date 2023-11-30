//DAILY LOGS
const elToggle  = document.querySelector("#dailylogs-btn");
const elContent = document.querySelector("#dailylogs-div");

elToggle.addEventListener("click", function() {
  elContent.classList.toggle("is-hidden");
});

//TASKS
const elToggle  = document.querySelector("#tasks-btn");
const elContent = document.querySelector("#tasks-div");

elToggle.addEventListener("click", function() {
  elContent.classList.toggle("is-hidden");
});