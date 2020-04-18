//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//event Listeners
todoButton.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();
}