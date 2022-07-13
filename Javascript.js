const input = document.querySelector("input");
const btn = document.querySelector(".addtask > button");

const chk = document.getElementById("chk");

chk.addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

btn.addEventListener("click", addlist);

function addlist(e) {
  const incomplete = document.querySelector(".incomplete");
  const completed = document.querySelector(".completed");

  const nextli = document.createElement("li");
  const chkbtn = document.createElement("button");
  const deletebutton = document.createElement("button");

  chkbtn.innerHTML = '<i class="fa fa-check"></i>';
  deletebutton.innerHTML = '<i class="fa fa-trash"></i>';

  if (input.value !== "") {
    nextli.textContent = input.value;
    input.value = "";
    incomplete.appendChild(nextli);
    nextli.appendChild(chkbtn);
    nextli.appendChild(deletebutton);
  }

  chkbtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    completed.appendChild(parent);
    chkbtn.style.display = "none";
  });

  deletebutton.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}
