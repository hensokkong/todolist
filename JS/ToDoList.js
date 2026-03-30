// let todolist = [
//     { name: 'clean', duedate: '20-11-22' },
//     { name: 'wash', duedate: '20-11-22' }
// ];
let todolist = JSON.parse(localStorage.getItem('todoList')) || [];

rendertodolist();


function rendertodolist() {
    let todoHTML = '';

    for (i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        //const name = todoObject.name;
        //const duedate = todoObject.duedate;
        const {name , duedate} = todoObject;
        const html = `
           <div>${name}</div>
           <div>${duedate}</div>
               
            <button onclick="todolist.splice(${i},1); rendertodolist()" class="delete-button">Delete</button>
           
           `;
        todoHTML += html;
    }
    console.log(todoHTML);
    document.querySelector('.js-list-todolist').innerHTML = todoHTML;
}

function ToDoList() {
    const inputElement = document.querySelector('.js-form-name');
    const inputduedate = document.querySelector('.js-due-date-input');
    const duedate = inputduedate.value;
    const name = inputElement.value;
    todolist.push({name,duedate});
    console.log(todolist)
    localStorage.setItem('todoList',JSON.stringify(todolist));
  
    rendertodolist();
    inputElement.value = '';
};
