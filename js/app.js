const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');




//Load all Event Listener


loadEventListeners();

function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask);


    //Remove Task event

    taskList.addEventListener('click', removeTask);


    //clear task event
    clearBtn.addEventListener('click', clearTasks);


    //filter through the tasks
    filter.addEventListener('keyup',filterTasks);
}


//Add Task


function addTask(e) {
    if (taskInput.value === ' ') {
        alert('Add a task');

    }

    else{





        //Create li element
        const li = document.createElement('li');
        //Add class
        li.className = 'collection-item';

        //Create text node and append to li

        li.appendChild(document.createTextNode(taskInput.value));

        //Create new link Element

        const link = document.createElement('a');


        //Add Class

        link.className = 'delete-item secondary-content';

        //add icon html


        link.innerHTML = '<i class="fas fa-trash"></i>'

        //Appened the link to li
        li.appendChild(link);

        //Append li to ul

        taskList.appendChild(li);


        //Store in LS
        // storeTaskInLocalStorage(taskInput.value);






        //Clear input 

        taskInput.value = ' ';

        e.preventDefault();
    }


}




//Store tasks
// function storeTaskInLocalStorage(task)
// {
//     let tasks;
//     if(localStorage.getItem('tasks')===null)
//     {
//         task=[];
//     }
//     else{
//         tasks=JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push(task);
// localStorage.setItem('tasks', JSON.stringify(tasks));
// }

//function to remove item
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete it');
        if (confirm('Are You Sure?')) {


            e.target.parentElement.parentElement.remove();
        }
    }
}


//fun to clear tasks

function clearTasks() {
    // taskList.innerHTML = '';

    //Faster

    while(taskList.firstChild)
    {
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter Tasks

function filterTasks(e)
{
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item =task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text)!=-1)
        {
            task.style.display='block';
        }
        else{
            task.style.display='none';
        }
    }
    ); 
}