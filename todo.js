/*
//Select Element
let taskinput=document.getElementById("taskinput");
let addbtn=document.getElementById("addbtn");
let tasklist=document.getElementById("tasklist");

//load task from local storage
window.onload=function () {
    let tasks =getTaskFromStorage();
    tasks.forEach(task => addtasktolist(task));
};

//add class btn.
addbtn.onclick=function () {
    let task=taskinput.Value.trim();
    if (task==="") 
    return;
       addtasktolist(task);
       saveTaskToStorage(task);
       taskinput.Value="";
};

//add task to ui
function addtasktolist(task) {
    let li=document.createElement("li");
    li.innerHTML=`${task} <span class="delete">❌<span/>`;
    tasklist.appendChild(li);
   
    // Add delete functionality
     li.querySelector(".delete").onclick = function () {
    li.remove();
    removeTaskFromStorage(task);
  };
};

// Save task to localStorage
function saveTaskToStorage(task) {
  let tasks = getTasksFromStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Remove task from localStorage
function removeTaskFromStorage(taskToRemove) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Get tasks from localStorage
function getTasksFromStorage() {
  let tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};
*/


// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage when page loads
window.onload = function () {
  let tasks = getTasksFromStorage();
  tasks.forEach(task => addTaskToList(task));
};

// Add task button click
addBtn.onclick = function () {
  let task = taskInput.value.trim();
  if (task === "") return;

  addTaskToList(task);
  saveTaskToStorage(task);
  taskInput.value = "";
};

// Add task to UI
function addTaskToList(task) {
  let li = document.createElement("li");
  li.innerHTML = `${task} <span class="delete">❌</span>`;
  taskList.appendChild(li);

  // Add delete functionality
  li.querySelector(".delete").onclick = function () {
    li.remove();
    removeTaskFromStorage(task);
  };
}

// Save task to localStorage
function saveTaskToStorage(task) {
  let tasks = getTasksFromStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTaskFromStorage(taskToRemove) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Get tasks from localStorage
function getTasksFromStorage() {
  let tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}













