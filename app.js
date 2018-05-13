document.querySelector('.header__btn').addEventListener('click', function () {
    var inputTodo = document.querySelector('.header__input');
    //addToDo(inputTodo.value);
    if (inputTodo.value) {
        addToDo(inputTodo.value);
        inputTodo.value = '';
    } else {
       alert('You need to type something in');
    }
});

function addToDo(text) {
    var todo = document.querySelector('.todo');
    var item = document.createElement('li');
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    item.innerText = text;
    item.classList.add('item');
    todo.appendChild(item);
    item.appendChild(paragraph);
    item.addEventListener('click', function () {
        item.classList.toggle('crossed-out');
    })

   
}