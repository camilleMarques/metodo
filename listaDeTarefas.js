<!DOCTYPE html>
<html>
<head>
  <title>Lista de Tarefas</title>
</head>
<body>
  <input type="text" id="tarefa" placeholder="Nova tarefa">
  <button onclick="adicionarTarefa()">Adicionar Tarefa</button>
  <ul id="listaTarefas"></ul>

  <script>
    function adicionarTarefa() {
      var tarefa = document.getElementById('tarefa').value;
      var listaTarefas = document.getElementById('listaTarefas');
      var novaTarefa = document.createElement('li');
      novaTarefa.textContent = tarefa;
      listaTarefas.appendChild(novaTarefa);
      document.getElementById('tarefa').value = '';
    }
  </script>
</body>
</html>
