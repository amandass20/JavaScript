var botaoeditar = false;
var linha;

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let celular = document.getElementById("celular");

let tabela = document.getElementById("tabela");
let adicionar = document.getElementById("adicionar");
let limpar = document.getElementById("limpar");

let excluir = document.getElementsByClassName("btn-danger");

let editar = document.getElementsByClassName("btn-secondary");

function remover(evento){
    let cadastro = evento.target.parentNode.parentNode;

    tabela.removeChild(cadastro);
}

function lim(){
    nome.value = "";
    email.value = "";
    celular.value = "";
}


function salvar(){
    if (botaoeditar == false){
        if(nome.value != "" && email.value != "" && celular.value != "" ){
            let tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${nome.value}</td>
                <td>${email.value}</td>
                <td>${celular.value}</td>
                <td>
                  <button type="button" class="btn btn-secondary btn-sm">Editar</button>
                  <button type="button" class="btn btn-danger btn-sm">Excluir</button>
                </td>`
                      
                tabela.appendChild(tr);
                      
            for (let elementos of excluir){
                elementos.addEventListener('click', remover);
            }
            for (let elementos of editar){
                elementos.addEventListener('click', (evento) =>{
                    let cadastro = evento.target.parentNode.parentNode;

                    nome.value = cadastro.cells[0].innerHTML;
                    email.value = cadastro.cells[1].innerHTML;
                    celular.value = cadastro.cells[2].innerHTML;
                    botaoeditar = true;
                    linha= cadastro;
                });
            }
        }
    } 
    else {
        linha.cells[0].innerHTML = nome.value;
        linha.cells[1].innerHTML = email.value;
        linha.cells[2].innerHTML = celular.value;
        botaoeditar = false;
    }
}


adicionar.addEventListener('click', function(a) {
        salvar();
        lim();
});

limpar.addEventListener('click', function(l) {

  lim();
});


for (let elementos of excluir){
    elementos.addEventListener('click', (evento) =>{
        let cadastro = evento.target.parentNode.parentNode;
        tabela.removeChild(cadastro);
    });
}

for (let elementos of editar){
    elementos.addEventListener('click', (evento) =>{
        let cadastro = evento.target.parentNode.parentNode;

        nome.value = cadastro.cells[0].innerHTML;
        email.value = cadastro.cells[1].innerHTML;
        celular.value = cadastro.cells[2].innerHTML;
        botaoeditar = true;
        linha= cadastro;
    });
}            