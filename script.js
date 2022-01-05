const criarButton = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

// Requisito 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
// como pegar o valor do input ->   https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/

function criaTarefa() {
  const tarefa = document.createElement('li');
  listaDeTarefas.appendChild(tarefa);
  tarefa.innerText = input.value;
  input.value = '';
}
criarButton.addEventListener('click', criaTarefa);
