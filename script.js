var tasks = [];

function addTask() {
  var taskText = document.getElementById("taskInput").value;

  if (taskText === "") {
    alert("Please enter a task!");
  } else {
    tasks.push(taskText);
    document.getElementById("taskInput").value = ""; 
    displayTasks();
  }
}

function displayTasks() {
  var list = document.getElementById("taskList");
  list.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    list.innerHTML += "<li>" + tasks[i] + " <button onclick='deleteTask(" + i + ")'>Delete</button></li>";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}
