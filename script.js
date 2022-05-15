let todos = []

function addToDo (text) {
    const todo={
        text, 
        done: false,
        id: Math.random()
    };
    
           
    todos.push(todo);
}

function deleteTodo (id) {
    todos.forEach(todo => {
        if (todo.id === id) {
             todo.done = true ;
        }
    })
}


function render (){
     console.log (todos);
}

addToDo (" Купить хлеб")

render ();