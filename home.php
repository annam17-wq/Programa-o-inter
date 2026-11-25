<?php

session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}

echo "Bem-vindo, " .$_SESSION['usuario'] . "!";
//imprimir usuario e senha
echo "<br>Usuario: " . $_SESSION['usuario']. "<br>Senha: " . $_SESSION['senha'];

?>