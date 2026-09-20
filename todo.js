let todoList = JSON.parse(localStorage.getItem('todoList')) || [
  {
    item: `Buy Milk`,
    dueDate: `2026-10-07`
  },
  {
    item: `Go to college`,
    dueDate: `2026-10-07`
  }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  if (todoItem.trim() === '' || todoDate === '') {
    alert('please enter here');
    return;
  }

  todoList.push({
    item: todoItem,
    dueDate: todoDate
  });

  // LocalStorage mein save
  localStorage.setItem('todoList', JSON.stringify(todoList));

  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];

    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button
        class="btn-delete"
        onclick="deleteTodo(${i})">
        Delete
      </button>
    `;
  }

  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);


  localStorage.setItem('todoList', JSON.stringify(todoList));

  displayItems();
}