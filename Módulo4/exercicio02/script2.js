/*
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
*/

var user = document.querySelector('#app input');
var list = document.querySelector('#app ul')

function add(){
    if (!user){
        list.innerHTML = 'Insira um usuário';
    } else {
        axios
            .get(`https://api.github.com/users/${user.value}/repos`)
            .then(function(response){
                lista(response.data);
                console.table(response.data);
            })
            .catch(function(error){
                alert('ERROR NA REQUISIÇÃO!')
                console.log(error)
                list.innerHTML = 'INFORME O NOME DE USUÁRIO!'
            });   
    } 
}

const lista = repositorios => {
    console.log(repositorios);
    list.innerHTML = "";
    for (repo of repositorios) {
        const reposnome = document.createTextNode(repo.name);
        const reposit = document.createElement("li");
        reposit.appendChild(reposnome);
        list.appendChild(reposit);
    }
}
