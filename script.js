// Add a new task to the list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
}

const taskList = document.getElementById("taskList");

// Create a new task element
const taskItem = document.createElement("li");
taskItem.textContent = taskText;

// Add a click event to mark the task as completed
taskItem.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
});

// Create a delete button for the task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
});

// Append the delete button to the task item
taskItem.appendChild(deleteButton);

// Add the task to the list
taskList.appendChild(taskItem);

// Clear the input
  taskInput.value = "";
}
