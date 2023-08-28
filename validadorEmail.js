<!DOCTYPE html>
<html>
<head>
  <title>Validador de E-mail</title>
</head>
<body>
  <input type="text" id="email" placeholder="Digite o e-mail">
  <button onclick="validarEmail()">Validar E-mail</button>
  <p id="resultado"></p>

  <script>
    function validarEmail() {
      var email = document.getElementById('email').value;
      var padraoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      var resultado = padraoEmail.test(email) ? 'E-mail válido' : 'E-mail inválido';
      document.getElementById('resultado').textContent = resultado;
    }
  </script>
</body>
</html>
