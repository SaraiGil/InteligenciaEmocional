letras = ['W', 'E', 'D', 'L', 'U', 'A', 'C', 'T', 'O', 'R', 'E', 'S', 'M', 'A', 'Ñ', 'B', 'N', 'O', 'I', 'S', 'S', 'E', 'C', 'N', 'H', 'T', 'R', 'A', 'N', 'S', 'F', 'O', 'R', 'M', 'A', 'C', 'I', 'O', 'N', 'E', 'U', 'U', 'C', 'L', 'I', 'E', 'N', 'T', 'E', 'S', 'G'];

function revisarCrucigrama()
{
	ganador = true;
	for (i = 0; i < 51; i++)
	{
		if (document.getElementById('letra'+(i+1)).value.toUpperCase() == letras[i])
		{
			document.getElementById('letra'+(i+1)).style = "color: green";
		}
		else
		{
			document.getElementById('letra'+(i+1)).style = "color: black";
			ganador = false;
		}
	}
	if (ganador)
	{
		alert('Felicidades');
	}
}