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

    document.getElementById("table").appendChild(new_task);
    new_task.id = "cc";
    console.log(new_task);

}
