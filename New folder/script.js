function addTask() {
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");
    const taskText = input.value.trim();
  
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">✕</button>
      `;
      list.appendChild(li);
      input.value = ""; // input sahəsini təmizlə
    }
  }
  
  function clearInput() {
    document.getElementById("todo-input").value = "";
  }
  
  function removeTask(button) {
    button.parentElement.remove();
  }
  