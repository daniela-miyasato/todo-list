const criarButton = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const tarefas = listaDeTarefas.children;
const apagarButton = document.getElementById('apaga-tudo');
const finalizarButton = document.getElementById('remover-finalizados');

// Requisito 5 e 6 - adiciona tarefa, ordenada
// como pegar o valor do input ->   https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/

function criaTarefa() {
  const tarefa = document.createElement('li');
  listaDeTarefas.appendChild(tarefa);
  tarefa.innerText = input.value;
  input.value = '';
}
criarButton.addEventListener('click', criaTarefa);

// Requisito 7 e 8 - pinta tarefa selecionada

function selecionaTarefa(event) {
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

listaDeTarefas.addEventListener('click', selecionaTarefa);

// Requisito 9 - risca a tarefa finalizada com dblclick
// verificar se um elemento possui uma classe "x"  -> https://www.ti-enxame.com/pt/javascript/verificar-se-um-elemento-contem-uma-classe-em-javascript/973105996/

function completedMark(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

listaDeTarefas.addEventListener('dblclick', completedMark);

// Requisito 10 - botão que apaga as tarefas
// método do Paulo Porto! e também teve o mesmo código no projeto da academia de lógica 6.2 (https://github.com/MathheusGuedes/Academia-de-Logica-6.2-Rubric) / script.js
// outra forma -> https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript

function apagaTudo() {
  listaDeTarefas.innerHTML = '';
}
apagarButton.addEventListener('click', apagaTudo);

// Requisito 11 - remover tarefa finalizada
// https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

function tarefaConcluida() {
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].classList.contains('completed')) {
      tarefas[index].remove();
    }
  }
}

finalizarButton.addEventListener('click', tarefaConcluida);
