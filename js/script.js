let inputTarefa = document.querySelector("#tarefa-digitada");
let btnClickTarefa = document.querySelector(".botao-tarefa");
let btnAddTarefa = document.getElementById("adicionar-tarefa"); // poderia ser querySelector("#adicionar-tarefa")
let tarefas = document.querySelector("#tarefas"); // poderia ser getElementById("tarefas")

// código com crase para que interprete como string mas não confunda com aspas

btnAddTarefa.onclick = function() {

    let valorDigitado = inputTarefa.value

    let tarefaNova =   `<div class = "col-md-4">
                            <div class = "card-tarefa">
                                <div class = "texto-tarefa">
                                    ${valorDigitado /* mesma coisa que fechar crase, concatenar a variável valorDigitado e reabrir a crase */} 
                                </div>
                                <div class = "botao-tarefa">
                                   <img src = "img/05.02-check.png" width="32" alt = "Botão para finalizar tarefa" title = "Botão para finalizar tarefa" >
                                </div>
                            </div>
                        </div>`;

    tarefas.innerHTML += tarefaNova;
}