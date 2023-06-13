<?php
$include = include("./config.php");
$con = connect();
if ($include && $con)
{
    $ID_User =1;
    $description="desciption";
    $date="01-06-2023";
    $hour="10:00";
    $cora=1;
    $n_comentarios=3;
    $n_retuits=5;
     $sql="SELECT ID_USUARIO, descripcion FROM publicacion";
     $query=mysqli_query($con, $sql);
    while($row=mysqli_fetch_assoc($query))
    {
         echo"<br>";
         echo($row["descripcion"]);
    }
}
?>