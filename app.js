// Get the input field and the task list
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const action1 = document.querySelector(".action-1");
const action2 = document.querySelector(".action-2");

// Add event listener to the form to handle the submission of new tasks
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  createTaskItem(taskInput.value);
});

//change the background color of the li every time the action-1 is performed
taskInput.addEventListener("input", () => {
  action1.style.backgroundColor = "green";
  // reset the background color to white if the input field is empty
  if (taskInput.value === "") {
    action1.style.backgroundColor = "white";
  }
});

//change the background color of the li every time the action-2 is performed
function changeBackgroundColor() {
  const action2Li = document.querySelector("li.action-2");
  action2Li.style.backgroundColor = "green";
  if (taskInput.value === "") {
    action2Li.style.backgroundColor = "yellow";
  }
}

//create a function that will open the dialog with id info-dialog-2 box when the info-btn is clicked
function openDialog1() {
  const dialog = document.querySelector("#info-dialog-1");
  dialog.showModal();
}
function closeDialog1() {
  const dialog = document.querySelector("#info-dialog-1");
  dialog.close();
}
function openDialog2() {
  const dialog = document.querySelector("#info-dialog-2");
  dialog.showModal();
}
function closeDialog2() {
  const dialog = document.querySelector("#info-dialog-2");
  dialog.close();
}

// Create a new task item and add it to the task list
function createTaskItem(taskName) {
  // If the task name is empty, then show a warning and return
  if (!taskName.trim()) {
    const alertDialog = document.querySelector("#alert-dialog");
    alertDialog.showModal();
    setTimeout(() => {
      alertDialog.close();
    }, 2000);
    return;
  }

  // Create the HTML elements for the task item
  const taskItem = document.createElement("li");
  const taskNameSpan = document.createElement("span");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  //edit button blackground color is green 


  // Set the text content and attributes of the HTML elements
  taskNameSpan.textContent = taskName;
  deleteButton.textContent = "Delete";
  editButton.textContent = "Edit";
  editButton.style.backgroundColor = "green";
  deleteButton.style.backgroundColor = "red";
  editButton.style.marginRight = "10px";



  // Add a click event listener to the delete button
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });
  // Add a click event listener to the task name span to mark the task as completed
  taskNameSpan.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Add the task item elements to the task item and the task item to the task list
  taskItem.appendChild(taskNameSpan);
  taskItem.appendChild(editButton); 
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Reset the input field
  taskInput.value = "";
}
