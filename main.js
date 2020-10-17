const btnCom = document.getElementById('bntCom');
const btnDel = document.getElementById('bntDel');
const addBtn = document.getElementById('addBtn');
const todo = document.getElementById('todo');
const con = document.querySelector('.container');
const msg = document.querySelector('.mesge');

const toDoit = (event) =>{
    event.preventDefault();
    if(todo.value){
        const aTodos = document.createElement("div");
        aTodos.classList.add("todos");
        con.appendChild(aTodos);
        
    
        // todolist
        const aparTodo = document.createElement("p");
        aparTodo.classList.add("par-todo");
        aparTodo.innerText = todo.value;
        aTodos.appendChild(aparTodo);
    
        todo.value = "";
        msg.innerText = "";
    }else{
       msg.innerText = "Please enter a To do first..."
    }
    
};


addBtn.addEventListener('click',toDoit);

