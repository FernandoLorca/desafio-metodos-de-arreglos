'use strict';

const inputText = document.querySelector('input[type=text');
const btnAdd = document.querySelector('#btnAdd');
const resultTotal = document.querySelector('#resultTotal');
const resultDone = document.querySelector('#resultDone');
const idTask = document.querySelector('#idTask');
const task = document.querySelector('#task');
const inputCheckbox = document.querySelector('input[type=checkbox]');
const deleteTask = document.querySelector('#deleteTask');
const renderId = document.querySelector('#renderId');
const renderTask = document.querySelector('#renderTask');

const tasks = [];

const renderTaskList = () => {
  const lastObj = tasks[tasks.length - 1];

  const render = `
    <li>
        <p id="task">${lastObj.task}</p>
        <div class="todoContainer__todoList--tasks-doneDelete">
        <input type="checkbox" />
        <img
            onclick="delete("
            id="deleteTask"
            src="./assets/img/x.svg"
            alt="delete task"
        />
        </div>
    </li>
  `;

  renderTask.innerHTML += render;
};

const renderIdNumber = () => {
  const lastObj = tasks[tasks.length - 1];

  const render = `
  <li>
      <p id="idTask">${lastObj.id}</p>
  </li>
`;

  renderId.innerHTML += render;
};

btnAdd.addEventListener('click', () => {
  tasks.push({
    id: Date.now(),
    task: inputText.value,
  });

  renderTaskList();

  renderIdNumber();
});

// deleteTask.addEventListener('click', () => {
//   tasks.map(mov => {
//     console.log(mov);
//   });
// });

// const deleteTaskSelected = id => {
//   tawsks;
// };
