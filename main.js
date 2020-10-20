

 
   

    
    

 

   
    
 

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
            
            //btn group
    
            const btncont = document.createElement("div");
            btncont.classList.add("groupBtn");
            aTodos.appendChild(btncont);
    
            //btns
    
            const btnCompl = document.createElement("button");
            btnCompl.innerHTML = '<i class="fas fa-check"></i>';
            btnCompl.setAttribute("id", "btnCom"); 
            btncont.appendChild(btnCompl);
            
             btnCompl.addEventListener('click',()=>{
                aparTodo.classList.toggle('completed')
              });
            
            
            const btnDelet = document.createElement("button");
            btnDelet.innerHTML = '<i class="fas fa-times"></i>';
            btnDelet.setAttribute("id", "btnDel"); 
            btncont.appendChild(btnDelet);
              

            btnDelet.addEventListener('click',()=>{
                aTodos.style.display = "none";
              });
            
            todo.value = "";
            msg.innerText = "";


        }else{
           msg.innerText = "Please enter a To do first..."
        }
        
    };


    addBtn.addEventListener('click',toDoit);
    
    
   
            
        
    