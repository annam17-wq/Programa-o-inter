<!DOCTYPE html>
<html lang="en">
<head>
    <title>Random</title>
</head>
<body>
    
<form action="">
<label for="min">Minimo</label>
<input name="min" type = "number" value = "<?php echo $min; ?>">>

<label for="max">Max</label>
<input name="max" type="number" value = "<?php echo $max; ?>">

<input type="submit">

</form>

<?php
if(isset ($_GET["min"]) && isset ( $_GET["max"]) ){
    $min= $_GET["min"];
     $max= $_GET["max"];
    echo rand($min, $max);
    
   }


?>

</body>
</html>