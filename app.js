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
    item.innerText = text;
    item.classList.add('item');
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    var remove = document.createElement('div');
    remove.classList.add('remove-btn');
    todo.appendChild(item);
    item.appendChild(paragraph);
    item.appendChild(remove);

    remove.addEventListener('click',function(){
        item.style.display = 'none';
    })

    item.addEventListener('click', function () {
        item.classList.toggle('crossed-out');
    })

   
}