var list = document.querySelector('div#app ul')
var input = document.querySelector('#app input')
var button = document.querySelector('#app button')

var nomes = JSON.parse(localStorage.getItem('list_nomes')) || [];
//Criando nomes na UL 
function render(){
    list.innerHTML = ''
    for (nome of nomes){
        var todo = document.createElement('li');
        var nomeText = document.createTextNode(nome);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = nomes.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteNomes(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        todo.appendChild(nomeText);
        todo.appendChild(linkElement);

        list.appendChild(todo);
    }
}
render();
//Adicionando nomes
function addTodo(){
    var nomeText = input.value;

    nomes.push(nomeText);
    input.value = '';
    render();
    saveToStorage();
}

button.onclick = addTodo;
//Excluindo nomes
function deleteNomes(pos){
    nomes.splice(pos, 1);
    render();
    saveToStorage();
}
//Salvando alterações
function saveToStorage(){
    localStorage.setItem('list_nomes', JSON.stringify(nomes));
}