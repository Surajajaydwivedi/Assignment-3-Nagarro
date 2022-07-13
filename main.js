window.addEventListener("load", () => {
  const form = document.querySelector("#taskformid");
  const input = document.querySelector("#taskinputid");
  const listElement = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (input.value.length <= 0) {
      return;
    }
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContentElement = document.createElement("div");
    taskContentElement.classList.add("content");

    taskElement.appendChild(taskContentElement);

    const inputElement = document.createElement("input");
    inputElement.classList.add("text");
    inputElement.type = "text";
    inputElement.value = task;
    inputElement.setAttribute("readonly", "readonly");

    taskContentElement.appendChild(inputElement);

    const actionsElement = document.createElement("div");
    actionsElement.classList.add("actions");

    const editElement = document.createElement("button");
    editElement.classList.add("edit");
    editElement.innerText = "Edit";

    const deleteElement = document.createElement("button");
    deleteElement.classList.add("delete");
    deleteElement.innerText = "Delete";

    actionsElement.appendChild(editElement);
    actionsElement.appendChild(deleteElement);

    taskElement.appendChild(actionsElement);

    listElement.appendChild(taskElement);

    input.value = "";

    editElement.addEventListener("click", (e) => {
      if (editElement.innerText.toLowerCase() == "edit") {
        editElement.innerText = "Save";
        inputElement.removeAttribute("readonly");
        inputElement.focus();
      } else {
        editElement.innerText = "Edit";
        inputElement.setAttribute("readonly", "readonly");
      }
    });

    deleteElement.addEventListener("click", (e) => {
      listElement.removeChild(taskElement);
    });
  });
});
