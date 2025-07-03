const addBtn = document.querySelector('.add-btn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="btn btn-sm btn-success tick-btn me-2">✔</button>
      <button class="btn btn-sm btn-danger delete-btn">🗑</button>
    </div>
  `;
  taskList.appendChild(li);
  taskInput.value = '';

  const tickBtn = li.querySelector('.tick-btn');
  const deleteBtn = li.querySelector('.delete-btn');
  const taskTextSpan = li.querySelector('.task-text');

  tickBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
}
