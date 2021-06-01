// document.getElementById()

console.log(document.getElementById("task.title"));

const taskTitle = document.getElementById("task-title");

taskTitle.textContent = "This is my list";
taskTitle.innerHTML = "This is working";
taskTitle.innerText = "Woowwo";

// document.querySelector()

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

//DOM selector for Single Element

document.querySelector("li").style.color = "red";
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";

document.querySelector("li:nth-child(odd)").style.background = "#ccc";

// DOM selector for Multipleelements

const items = document.getElementsByClassName("collection-item");
console.log(items);

/* const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

console.log(listItems);

let list = document.getElementsByTagName("li");

//convert Html collection into array

list = Array.from(list);

list.reverse();
console.log(list);

list.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello baby`;
});
console.log(lis); */

// document.querySelectorAll - ez mar Node list ad vissza ezzel mar tobb mindent lehet csinalni

const listItems = document.querySelectorAll("ul.collection li.collection-item");

listItems.forEach(function (item, index) {
  item.textContent = `${index}: This is cool`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li, index) {
  li.style.background = "#ccc";
});
