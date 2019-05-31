var id;


function allowDrop(ev){
    ev.preventDefault();
}

function dragStart(ev){
    id=ev.target.id;
}

function drop(ev){
    ev.target.append(document.getElementById(id));
}



function addNewTask(){
    let new_task = document.createElement("div");
    new_task.classList.add("task");
    new_task.setAttribute("draggable", "true");
    new_task.setAttribute("ondragstart", "dragStart(event)");
    
    window.onerror = function(message){
        window.confirm("You have to create a table before you add a task.");
    }
    
    let taskToTable = prompt("write table to add task to")

    document.getElementById(taskToTable).appendChild(new_task);
    
    let color = prompt("green, blue, cyan, red")
    new_task.id = color;

}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function addTaskTodo(){
    let todoTask = document.createElement("div");
    todoTask.classList.add("task");
    todoTask.setAttribute("draggable", "true");
    todoTask.setAttribute("ondragstart", "dragStart(event)");
    document.getElementById("1").appendChild(todoTask);
    todoTask.id = "c"
}

function addTaskDoing(){
    let doingTask = document.createElement("div");
    doingTask.classList.add("task");
    doingTask.setAttribute("draggable", "true");
    doingTask.setAttribute("ondragstart", "dragStart(event)");
    document.getElementById("2").appendChild(doingTask);
    doingTask.id = "e"
}

function addTaskDone(){
    let doneTask = document.createElement("div");
    doneTask.classList.add("task");
    doneTask.setAttribute("draggable", "true");
    doneTask.setAttribute("ondragstart", "dragStart(event)");
    document.getElementById("3").appendChild(doneTask);
    doneTask.id = "d"
}