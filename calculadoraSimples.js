<!DOCTYPE html>
<html>
<head>
  <title>Calculadora</title>
</head>
<body>
  <input type="text" id="num1" placeholder="Número 1">
  <input type="text" id="num2" placeholder="Número 2">
  <button onclick="somar()">Somar</button>
  <button onclick="subtrair()">Subtrair</button>
  <p id="resultado"></p>

  <script>
    function somar() {
      var num1 = parseFloat(document.getElementById('num1').value);
      var num2 = parseFloat(document.getElementById('num2').value);
      var resultado = num1 + num2;
      document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
    }

    function subtrair() {
      var num1 = parseFloat(document.getElementById('num1').value);
      var num2 = parseFloat(document.getElementById('num2').value);
      var resultado = num1 - num2;
      document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
    }
  </script>
</body>
</html>