<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
    <label for="numero">Numero: </slabel>
    <input type="number" name="numero">
    <input type="submit">
    </form>
    <?php

  if(!isset($_GET['numero'])){
    exit();}
$numero=$_GET['numero'];


 function ePar($n){
    if ($n % 2 == 0){
        echo "é par";
}else{
    echo "é impar";
}
}

ePar($numero);
 
  ?>
  </body>
  </html>