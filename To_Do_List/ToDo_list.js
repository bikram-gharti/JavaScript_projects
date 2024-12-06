function add(){
    let input_task = document.querySelector('#input_task').value;
    let tasks = document.querySelector('#tasks');
    if(input_task.length == 0){
        alert("Please enter a task")
    }
    else{
        tasks.innerHTML += `
            <div class="task">
                <span class="taskname">${input_task}</span>
                <button class="delete"><i class="fa-solid fa-trash"></i></button>
            </div>
        `
    }
    let current_task = document.querySelectorAll(".delete");
    for(i = 0; i<current_task.length; i++){
        current_task[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    let task = document.querySelectorAll('.task');
    for(i=0; i<task.length; i++){
        task[i].onclick = function(){
            this.classList.toggle("completed");
        }
    }
    document.querySelector('#input_task').value = "";
}