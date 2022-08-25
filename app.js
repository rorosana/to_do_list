//Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('en', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('en', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('en', { month: 'short' });
    dateYear.textContent = date.toLocaleString('en', { year: 'numeric' });
};

setDate();

//Task container
//const tasksContainer = document.getElementById('tasksContainer');
const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
const app = document.getElementsByClassName("app");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
    acceptData();
    createTask(data);
});

const formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank!";
        console.log("failure");
    } else {
        msg.innerHTML ="";
        console.log("success");
    }
};

const data = {};

const acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    
};

const createTask = data => {
    /*app.innerHTML*/const html  = `
        <li class="item taskGroup roundBorder">
            <span class="opcions">${data}</span>
            <i onClick="editPost(this)" class="fas fa-edit modify"></i>
            <i onClick="deletePost(this)" class="far fa-trash-alt"></i>
        </li>
    `;
    app.innerHTML += html;
};






/*const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}*/



