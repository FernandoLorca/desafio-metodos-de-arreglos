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

let tasks = [
  { id: 1669730370878, task: 'Trabajar', state: false },
  { id: 1669730370873, task: 'Hacer ejercicio', state: false },
  { id: 1669730369115, task: 'Estudiar js', state: false },
];

const renderTaskSelected = () => {
  renderTask.innerHTML = '';

  tasks.forEach(item => {
    renderTask.innerHTML += `
      <li>
        <p class="${item.state ? 'clase' : ''}">${
      item.task
    } - <span class="selectedTask">${item.state ? 'Realizado' : ''} </span></p>
        <div class="todoContainer__todoList--tasks-doneDelete">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-check"
          viewBox="0 0 16 16"
          color="green"
          onclick="doneTaskSelected(${item.id}, ${item.state})"
        >
          <path
            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
          />
        </svg>
          <img
            id="deleteTask"
            src="./assets/img/x.svg"
            alt="delete task"
            onclick="deleteTaskSelected(${item.id})"
          />
        </div>
      </li>
`;
  });
};

const renderIdTadk = () => {
  renderId.innerHTML = '';

  tasks.forEach(item => {
    renderId.innerHTML += `
      <li>
        <p id="idTask">${item.id}</p>
      </li>
`;
  });
};

const doneTaskSelected = (id, state) => {
  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].id == id) {
      tasks[index].state = true;
      renderTaskSelected();
      renderIdTadk();
      updateTasksTotalDone();

      return;
    }
  }
};

const deleteTaskSelected = id => {
  tasks = tasks.filter(item => item.id !== id);
  resultTotal.textContent = tasks.length;
  renderTaskSelected();
  renderIdTadk();
  updateTasksTotalDone();
};

const updateTasksTotalDone = () => {
  const prueba = tasks.reduce((acc, cur) => {
    if (cur.state === true) {
      acc.push(cur.id);
    }

    return acc;
  }, []);

  console.log(prueba);

  resultDone.textContent = prueba.length;
};

resultTotal.textContent = tasks.length;
renderTaskSelected();
renderIdTadk();

btnAdd.addEventListener('click', () => {
  tasks.push({
    id: Date.now(),
    task: inputText.value,
    state: false,
  });

  inputText.value = '';
  resultTotal.textContent = tasks.length;

  renderTaskSelected();
  renderIdTadk();
});
