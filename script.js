const form = document.querySelector("#task-form");
// ul//
const taskInput = document.querySelector("#task");
// ul//
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addNewTask);

  taskList.addEventListener("click", removeTask);
  // clear all tasks
  clearBtn.addEventListener("click", clearTasks);

  filter.addEventListener("keyup", filterTasks);
}

//
function addNewTask(e) {
  if (taskInput.value === "") {
    alert("Please add a task");
  }

  //Create li element
  const li = document.createElement("li");
  // Add class from materialize
  li.className = "collection-item";
  // Create text node and append
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element
  const link = document.createElement("a");
  // add class to link
  link.className = "delete-item secondary-content";
  // add icon
  link.innerHTML = '<i class="far fa-trash-alt"></i>';

  // append link to li
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  // CLear input
  taskInput.value = "";
  e.preventDefault();
}

// Remove taskss one by one
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure you want to delete it? ")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear all tasks
function clearTasks(e) {
  /* taskList.innerHTML = ""; */

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter through tasks
function filterTasks(e) {
  const filterText = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    console.log(item);
    if (item.toLowerCase().indexOf(filterText) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
