const form = document.querySelector("#task-form");
// ul//
const taskInput = document.querySelector("#task");
// ul//
const taskList = document.querySelector(".task-collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addNewTask);
}

//
function addNewTask(e) {
  if (taskInput.value === "") {
    alert("Please add a task");
  }
  e.preventDefault();
}
