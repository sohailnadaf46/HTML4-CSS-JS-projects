const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputbox.value ===""){
    alert("You must write something")
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value ="";
  saveData();
}

listContainer.addEventListener("click", function(strict){
  if(strict.target.tagName ==="LI"){
    strict.target.classList.toggle("checked");
    saveData();
  }else if(strict.target.tagName ==="SPAN"){
    strict.target.parentElement.remove();
    saveData();
  }
    
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();