<h1>  <?php echo "Ola mundo!";  ?>  </h1>

<?php
$valor=50;
echo "<p>".$valor."</p>";
echo "<p> $valor </p>";
echo '<p> $valor </p>';

$nome = "João";
echo $nome;

$array=""; //Declarando var array como string
$array=array();//como array
$array=["pera", "maça", "banana"]; //como array
echo "<br>"; 
print_r($array);

echo "<ul>";
for($i=0;$i<=count($array); $i++){
    echo "<li> $i  $array[$i] </li>";
}

echo "</ul>"

?>

