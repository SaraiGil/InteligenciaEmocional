ajax = new XMLHttpRequest();

mostrarResultados();

function registrar()
{
	usNombre = document.getElementById('usNombre').value;
	usIQ = document.getElementById('usIQ').value;
	usCreatividad = document.getElementById('usCreatividad').value;
	usSolProbl = document.getElementById('usSolProbl').value;
	usTrabEquipo = document.getElementById('usTrabEquipo').value;

	datos = "usNombre="+usNombre+"&usIQ="+usIQ+"&usCreatividad="+usCreatividad+"&usSolProbl="+usSolProbl+"&usTrabEquipo="+usTrabEquipo;
	ajax.open("POST", "assets/php/GuardarDatos.php", true);
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send(datos);
	ajax.onreadystatechange = function()
	{
		if (ajax.readyState == 4)
		{
			if(ajax.responseText != null)
			{
				alert("Registro Exitoso");
				mostrarResultados();
			}
			else
			{
				alert("Ocurrió un Error");
			}
		}
	}
}

function mostrarResultados(filtro)
{
	if (filtro == null)
	{
		filtro = "";
	}
	ajax.open("POST", "assets/php/SacarDatos.php", true);
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send("filtro=" + filtro);
	ajax.onreadystatechange = function()
	{
		if (ajax.readyState == 4)
		{
			data = [];
			people = ajax.responseText.split(":");
			for (x = 0; x < people.length - 1; x++)
			{
				data[x] = people[x].split(",");
			}
			actualizarTabla(data);
		}
	}
}

function actualizarTabla(datos)
{
	tabla = document.getElementById('tabla');
	tabla.innerHTML = "<tr><th class='tH'>Nombre Completo</th><th class='tH'>IQ</th><th class='tH'>Creatividad</th><th class='tH'>Solución de Problemas</th><th class='tH'>Trabajo en Equipo</th></tr>";
	for (x = 0; x < datos.length; x++)
	{
		tabla.innerHTML += 	"<tr>" +
								"<td class='tD'>" + datos[x][1] + "</td>" +
								"<td class='tD'>" + datos[x][2] + "</td>" +
								"<td class='tD'>" + datos[x][3] + "</td>" +
								"<td class='tD'>" + datos[x][4] + "</td>" +
								"<td class='tD'>" + datos[x][5] + "</td>" +
							"</tr>";
	}
}

function filtrarResultados()
{
	filtroIQ = document.getElementById('filtroIQ').value;
	filtroCreatividad = document.getElementById('filtroCreatividad').value;
	filtroSolProbl = document.getElementById('filtroSolProbl').value;
	filtroTrabEquipo = document.getElementById('filtroTrabEquipo').value;

	if (filtroIQ == "")
	{
		filtroIQ = 0;
	}
	if (filtroCreatividad == "")
	{
		filtroCreatividad = 0;
	}
	if (filtroSolProbl == "")
	{
		filtroSolProbl = 0;
	}
	if (filtroTrabEquipo == "")
	{
		filtroTrabEquipo = 0;
	}

	mostrarResultados("usIQ >= " + filtroIQ + " AND usCreatividad >= " + filtroCreatividad + " AND usSolProbl >= " + filtroSolProbl + " AND usTrabEquipo >= " + filtroTrabEquipo);
}