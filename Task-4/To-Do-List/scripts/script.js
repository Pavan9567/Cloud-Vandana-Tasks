const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskItem.appendChild(taskTextSpan);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-task-btn';
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(removeBtn);

    taskList.appendChild(taskItem);

    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
})