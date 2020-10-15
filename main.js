const btnCom = document.getElementById('bntCom');
const btnDel = document.getElementById('bntDel');
const addBtn = document.getElementById('addBtn');
const todo = document.getElementById('todo');
const con = document.querySelector('.container');

const toDoit = (event) =>{
    event.preventDefault();
    
    const aTodos = document.createElement("div");
    aTodos.classList.add("todos");
    con.appendChild(aTodos);
    

    // todolist
    const aparTodo = document.createElement("p");
    aparTodo.classList.add("par-todo");
    aparTodo.innerText = todo.value;
    aTodos.appendChild(aparTodo);

    todo.value = "";
};


addBtn.addEventListener('click',toDoit);

