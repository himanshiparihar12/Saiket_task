const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task">${taskText}</span>
        <div class="btns">
            <button class="complete">Done</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    // Mark completed
    li.querySelector(".complete").onclick = function () {
        li.classList.toggle("completed");
    };

    // Edit task
    li.querySelector(".edit").onclick = function () {
        const newText = prompt("Edit task:", li.querySelector(".task").textContent);
        if (newText !== null && newText.trim() !== "") {
            li.querySelector(".task").textContent = newText.trim();
        }
    };

    // Delete task
    li.querySelector(".delete").onclick = function () {
        li.remove();
    };
}
