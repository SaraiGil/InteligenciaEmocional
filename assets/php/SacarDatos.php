<?php

	include("Conexion.php");

	$filtro = $_POST['filtro'];

	$Con = conectar();

	$DB = "tomadecisiones";

	$Query = "SELECT * FROM usuarios";
	if ($filtro != "" && $filtro != null)
	{
		if ($filtro == "best")
		{
			$Query .= " ORDER BY usIntEmoc DESC LIMIT 3;";
		}
		else
		{
			$Query .= " WHERE $filtro ORDER BY usIntEmoc DESC;";
		}
	}
	else
	{
		$Query .= " ORDER BY usIntEmoc DESC;";
	}
	$Result = ejecutarQuery($Con, $Query, $DB);

	if ($Result->num_rows > 0)
	{
	    while($row = $Result->fetch_assoc())
	    {
	        echo $row['idUsuario'] . "," . $row['usNombre'] . "," . $row['usIQ'] . "," . $row['usCreatividad'] . "," . $row['usSolProbl'] . "," . $row['usTrabEquipo'] . ":";
	    }
	}
	else
	{
	    echo "0";
	}

	desconectar($Con);
?>