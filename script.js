const criarButton = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const tarefas = listaDeTarefas.children;

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
