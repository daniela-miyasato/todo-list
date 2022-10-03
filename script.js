const criarButton = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const tarefas = listaDeTarefas.children;
const apagarButton = document.getElementById('apaga-tudo');
const finalizarButton = document.getElementById('remover-finalizados');

function criaTarefa() {
  const tarefa = document.createElement('li');
  listaDeTarefas.appendChild(tarefa);
  tarefa.innerText = input.value;
  input.value = '';
}
criarButton.addEventListener('click', criaTarefa);


function selecionaTarefa(event) {
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

listaDeTarefas.addEventListener('click', selecionaTarefa);


function completedMark(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

listaDeTarefas.addEventListener('dblclick', completedMark);


function apagaTudo() {
  listaDeTarefas.innerHTML = '';
}
apagarButton.addEventListener('click', apagaTudo);


function tarefaConcluida() {
  for (let index = tarefas.length - 1; index >= 0; index -= 1) {
    if (tarefas[index].classList.contains('completed')) {
      listaDeTarefas.removeChild(tarefas[index]);
    }
  }
}
finalizarButton.addEventListener('click', tarefaConcluida);
