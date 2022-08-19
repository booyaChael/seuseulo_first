

//주간 배열 html의 table로 연결짓기//
var calendarTableDate = "<tr>";
arWeek.forEach((value) => {
    calendarTableDate += `<td onClick="showToDo(this);">${value}</td>`;
});
calendarTableDate += "</tr>";
document.getElementById("calendar_table_date").innerHTML = calendarTableDate;


//toDoList 입력, 삭제//
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function handleToDoSubmit(event){ 
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "X";

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);

    button.addEventListener("click", deleteToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//날짜 띄우기
function showToDo(element){
    alert(element.innerHTML);
}