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
const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
const taskGroup = document.getElementById('taskGroup');
var count = 1;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

const formValidation = () => {
    let userData = input.value;
    if(userData.trim() === ""){
        msg.innerHTML = "Post cannot be blank!";
        console.log("failure");
    } else {
        msg.innerHTML ="";
        console.log("success"); 
        acceptData();
    }
};

const data = {};

const acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createTask();
};

const createTask = () => {
    taskGroup.innerHTML += `
        <div>
            <p>${data.text}</p>
            <span class="options">
                <i onClick="editTask(this)" class="fas fa-edit modify"></i>
                <i onClick="deleteTask(this)" class="far fa-trash-alt"></i>
            </span>
        </div>
    `;
    input.value = "";
    taskGroup.addEventListener('click', changeTaskState);
};

const deleteTask = (e) => {
    e.parentElement.parentElement.remove();
};

const editTask = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};