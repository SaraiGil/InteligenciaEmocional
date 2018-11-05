<?php

	function conectar()
	{
		$con = mysqli_connect("localhost", "root", "");
		return $con;
	}

	function desconectar($con)
	{
		mysqli_close($con);
	}

	function ejecutarQuery($con, $consulta, $db)
	{
		mysqli_select_db($con, $db);
		$queryresult = mysqli_query($con, $consulta) or die(mysqli_error($con));
		return $queryresult;
	}

?>