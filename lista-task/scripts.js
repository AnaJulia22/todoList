const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const completeList = document.querySelector('.list-task')
const taskButton = document.querySelector('.tasks-button')
const completeList2 = document.querySelector('.list-task2')
const filterBtn = document.querySelector(".filter-select");
const editForm = document.querySelector("#edit-form");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const box = document.querySelector('.box')
const input_edit = document.querySelector('.input-edit')
const input_desc_edit = document.querySelector('.input-desc-edit')
const submit_edit = document.querySelector('.button-edit-task')
const prioridade = document.querySelector('.prioridade-box')
const listasBox = document.querySelector('#listagem')
const descricaobox = document.querySelector('#descricao')
const inputDescricao = document.querySelector('.input-descricao')
let itemList = []
let index = 0

function addTask() {
    
    if (input.value && prioridade.value !== 'Default' && (inputDescricao.value)){
        itemList.push({
            task: input.value,
            done: false,
            prio: prioridade.value,
            desc: inputDescricao.value
         })
        input.value = ''
        inputDescricao.value = ''
    } else {
        alert("Preencha todas as atribuições")
    }
    showTask()
}
  
const toggleForms2 = () => {
    listasBox.classList.toggle("hide");
    box.classList.toggle("hide");
    };
const toggleForms3 = () => {
    listasBox.classList.toggle("hide");
    descricaobox.classList.toggle("hide");
    };
const toggleForms4 = () => {
    editForm.classList.toggle("hide");
    listasBox.classList.toggle("hide");
    };
const back = document.querySelector('.back')
back.addEventListener("click", hideMenu)
submit_edit.addEventListener("click", (e) => {
    e.preventDefault();
    subt(index)
    toggleForms4();
  });
taskButton.addEventListener("click", hideMenu)

function subt(index) {
  if (input_edit.value) {
    itemList[index].task = input_edit.value;
  } 
  if (input_desc_edit.value) {
    itemList[index].desc = input_desc_edit.value;
    } 
  showTask2();
}
function updateTodo(index) {
    toggleForms4();
    index = index
    }

function hideMenu() {
    if (itemList.length>0) {
        toggleForms2();
        showTask2();
    }else{
        alert("Você não possui tarefas")
    }
}

function showTask() {
    let newLi = ''
    let a = true;
    itemList.forEach((item,index) => {
        newLi = newLi + `
            <li class="task ${item}">
                <p>${item.task} ${item.prio}</p>
                <img src="./img/trash.png" alt="delete" onclick="deletTask(${index}, ${a})">
            </li>
            `
    })

    completeList.innerHTML = newLi
    localStorage.setItem('list', JSON.stringify(itemList))
    
}

function descricao(index) {
    toggleForms3();
    let descri = "Descrição: "+itemList[index].desc
    descricaobox.innerHTML = descri ;
}

function showTask2() {
    let newLi = ''
    let a = false;
    itemList.forEach((item, index) => {
        newLi = newLi + `
            <li class="task1 ${item.done && "done"}">
                <img src="./img/check.png" alt="check" onclick="doneTask(${index})">
                <p>${item.task} <br> ${item.prio}</p>                
                <img class="edit" src="./img/edit.png" alt="edit" onclick="updateTodo(${index})">
                <img src="./img/ponto.png" alt="descricao" onclick="descricao(${index})">
                <img src="./img/trash.png" alt="delete" onclick="deletTask(${index}, ${a})">
            </li>
            `
    })

    completeList2.innerHTML = newLi
    localStorage.setItem('list', JSON.stringify(itemList))
    
}

function updateTask() {
    const taskLocalStorage = localStorage.getItem('list')
    if (taskLocalStorage) {
    itemList = JSON.parse(taskLocalStorage)
    }
    showTask2();
}

function deletTask(index, a){
    itemList.splice(index, 1)
    if (a===true){
        showTask();
    } else {
        showTask2();
    }
    
}

function doneTask(index) {
    itemList[index].done = !itemList[index].done
    showTask2();
}
updateTask();
button.addEventListener('click', addTask)