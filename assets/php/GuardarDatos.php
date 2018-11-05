<?php

	include("Conexion.php");

	$usNombre = $_POST['usNombre'];
	$usIQ = $_POST['usIQ'];
	$usCreatividad = $_POST['usCreatividad'];
	$usSolProbl = $_POST['usSolProbl'];
	$usTrabEquipo = $_POST['usTrabEquipo'];
	$usIntEmoc = intval($usIQ) + intval($usCreatividad) + intval($usSolProbl) + intval(usTrabEquipo);

	$Con = conectar();

	$DB = "tomadecisiones";
	$Query = "INSERT INTO usuarios VALUES ('', '$usNombre', $usIQ, $usCreatividad, $usSolProbl, $usTrabEquipo, $usIntEmoc);";
	$Result = ejecutarQuery($Con, $Query, $DB);

	desconectar($Con);

	echo $Result;
?>