const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//create a new task element
function createTask(taskContent) {
    const li = document.createElement("li");

    // Create the task text element
    const span = document.createElement("span");
    span.textContent = taskContent;
    li.appendChild(span);

    // Create the complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete");
    completeBtn.onclick = () => markTaskAsCompleted(li);
    li.appendChild(completeBtn);

    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => removeTask(li);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

//mark as completed
function markTaskAsCompleted(task) {
    task.classList.toggle("completed");
    const completeBtn = task.querySelector("button.complete");
    completeBtn.textContent = task.classList.contains("completed") ? "Undo" : "Complete";
}

//remove a task
function removeTask(task) {
    // Check if the task is completed
    if (task.classList.contains("completed")) {
        alert("You cannot delete a completed task.");
    } else {
        taskList.removeChild(task);
    }
}

//add new task
function addTask() {
    const taskContent = taskInput.value.trim();
    if (taskContent) {
        createTask(taskContent);
        taskInput.value = ""; // Clear the input field
    }
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);

//Enter key to add task
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});