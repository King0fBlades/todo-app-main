// sort: true
Sortable.create(sortTrue, {
    group: "sorting",
    sort: true
});



const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.add-task');
const todoList = document.querySelector('.list-group');

todoButton.addEventListener('click', addTodo);

function addTodo(event) {
    //Prevent form from submiting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('list-group-item');
    //Create INPUT
    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
}


/* <div class="list-group-item">
    <input type="checkbox" id="task-1" />
    <label for="task-1">
        <span class="custom-checkbox"><i class="fas fa-check"></i></span>
        <span class="custom-text">Lorem ipsum dolor 1</span>
    </label>
</div>
 */