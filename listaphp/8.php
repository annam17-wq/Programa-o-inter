<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Soma de números</title>
</head>
<body>

<form action="" method="GET">
   <label for="numeros">números</label>
   <input id="numeros" type="text" name="num">
   <input type="submit" value="Somar">
</form>

<?php

if(isset($_GET["num"])){
    $num = explode(" ", $_GET["num"]); 
    $soma = 0;
    for($i=0; $i< count($num); $i++){
        $soma = $soma + floatval($num [$i]);
    }

echo $soma; 

}
else {
    echo "erro";
}




?>


</body>
</html>