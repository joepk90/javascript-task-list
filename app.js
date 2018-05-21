// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // add task form
  form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {

if (taskInput.value === '') {
  alert('Add a task');
}

// Create li element
const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode(taskInput.value));

// Create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

//Apend li to ul
taskList.appendChild(li);

taskInput.value = '';

e.preventDefault();

}
