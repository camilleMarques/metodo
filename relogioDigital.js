<!DOCTYPE html>
<html>
<head>
  <title>Relógio Digital</title>
</head>
<body>
  <p id="relogio"></p>

  <script>
    function atualizarRelogio() {
 varagora = Date();
 var horas = agora.getHours();
var minutos = agora.getMinutes();
      var segundos = agora.getSeconds();
      var formatoHora = horas + ':' + minutos + ':' + segundos;
      document.getElementById('relogio').textContent = formatoHora;
    }

    setInterval(atualizarRelogio, 1000);
  </script>
</body>
</html>
