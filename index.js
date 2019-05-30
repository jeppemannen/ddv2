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

    document.getElementById("addedTable").appendChild(new_task);
    
    let color = prompt("green, blue, cyan, red")
    new_task.id = color;

}

function addNewTable(){
    let new_table = document.createElement("div");
    new_table.classList.add("newTable");
    new_table.setAttribute("ondragover", "allowDrop(event)");
    new_table.setAttribute("ondrop", "drop(event)");
    document.getElementById("tableContainer").appendChild(new_table);
    new_table.id = "addedTable"
    console.log(new_table);
    
}