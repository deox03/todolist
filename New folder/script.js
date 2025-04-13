let isInputVisible = false;
let taskIndex = 0;
let sortState = 0;

function toggleInput() {
  const inputGroup = document.getElementById("input-group");
  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  if (!isInputVisible) {
    inputGroup.style.display = "flex";
    todoList.style.display = "none";
    input.focus();
    isInputVisible = true;
  } else {
    const task = input.value.trim();
    if (task === "") return;

    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.dataset.index = taskIndex++;
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="removeTask(this)">
        <img src="image copy.png" class="delete-icon" alt="sil">
      </button>
    `;
    todoList.appendChild(li);

    input.value = "";
    inputGroup.style.display = "none";
    todoList.style.display = "block";
    isInputVisible = false;
  }
}

function clearInput() {
  document.getElementById("todo-input").value = "";
}

function removeTask(button) {
  const li = button.closest("li");
  li.remove();
}

function sortTasks() {
  const list = document.getElementById("todo-list");
  const items = Array.from(list.children);
  const sortIcon = document.getElementById("sort-icon");

  if (sortState === 0) {
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    sortIcon.src = "sortkicikdolu.png";
    sortState = 1;
  } else if (sortState === 1) {
    items.sort((a, b) => a.dataset.index - b.dataset.index);
    sortIcon.src = "sortboyukbos.png";
    sortState = 2;
  } else if (sortState === 2) {
    items.sort((a, b) => b.textContent.localeCompare(a.textContent));
    sortIcon.src = "sortboyukdolu.png";
    sortState = 3;
  } else {
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    sortIcon.src = "sortkicikbos.png";
    sortState = 0;
  }

  list.innerHTML = "";
  items.forEach((item, index) => {
    item.dataset.index = index;
    list.appendChild(item);
  });
}
