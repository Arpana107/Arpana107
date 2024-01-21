const todoList = document.querySelector('#todo-list');
const newTaskInput = document.querySelector('#new-task');
const addTaskButton = document.querySelector('#add-task');

addTaskButton.addEventListener('click', () => {
  const newTask = newTaskInput.value;
  todoList.innerHTML += `<li>${newTask}</li>`;
  newTaskInput.value = '';
});

todoList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'LI') {
    target.classList.toggle('completed');
  }
});
