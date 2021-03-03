function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var estadoCivilIngresado;
	var temperaturaIngresada;
	var sexoIngresado;
	var respuesta;
	var precioPorPasajero = 600;
	var contadorSolteros = 0;
	var contadorCasados = 0;
	var contadorViudos = 0;
	var contadorViudosMayores60 = 0;
	var flagM = 0;
	var nombreSolteraJoven;
	var edadSolteraJoven;
	var contadorPasajeros = 0;
	var descuento = 0.25;
	var contadorPasajerosMayor60 = 0;
	var precioTotalBruto;
	var porcentajePasajerosMayores;
	var precioDescuento;

	do
	{
		nombre = prompt("Ingrese el nombre del pasajero")
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Dato inválido. Ingrese el nombre neuvamente");
		}
		edadIngresada = prompt("Ingrese su edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada < 17 || edadIngresada > 120)
		{
			edadIngresada = prompt("Dato inválido. Ingrese la edad nuevamente");
			edadIngresada = parseInt(edadIngresada);		
		}
		estadoCivilIngresado = prompt("Ingrese su estado civil");
		while(estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt("Dato inválido. Ingrese neuvamente el estado civil");
		}
		temperaturaIngresada = prompt("Ingrese la temperatura");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada) || temperaturaIngresada < 34 || temperaturaIngresada > 42)
		{
			temperaturaIngresada = prompt("Dato inválido. Ingrese nuevamente la temperatura");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}
		sexoIngresado = prompt("Ingrese el sexo (femenino-masculino)");
		while(sexoIngresado != "femenino" && sexoIngresado != "masculino")
		{
			sexoIngresado = prompt("Dato inválido. Ingrese nuevamente el sexo");
		}

		switch(estadoCivilIngresado)
		{
			case "casado":
				contadorCasados++;
				break;
			case "soltero":
				contadorSolteros++;
				//B
				if(sexoIngresado == "femenino" && flagM == 0)
				{
					edadSolteraJoven = edadIngresada;
					nombreSolteraJoven = nombreIngresado;
					flagM = 1;
				}
				else if(sexoIngresado == "femenino" && edadIngresada > edadSolteraJoven)
				{
					edadSolteraJoven = edadIngresada;
					nombreSolteraJoven = nombreIngresado;
				}
				break;
			case "viudo":
				contadorViudos++;
				//A
				if(edadIngresada > 60)
				{
					contadorViudosMayores60++;
				}
				break;
		}

		if(edadIngresada > 60)
		{
			contadorPasajerosMayor60++;
		}
		contadorPasajeros++;
	


		respuesta = confirm("¿Desea continuar ingresando pasajeros?")
	}while(respuesta == true)

		//A La cantidad de personas con estado "viudo" de mas de 60 años
		document.write("La cantidad de viudos mayores de 60 años es de "+contadorViudosMayores60);
		//B El nombre y edad de la mujer soltera mas joven.
		document.write("<br/> El nombre de la mujer soltera más joven es "+nombreSolteraJoven+" y la edad es "+edadSolteraJoven+" años");
		//C Cuánto sale el viaje total sin descuento
		precioTotalBruto = contadorPasajeros * precioPorPasajero;
		document.write("<br/> El total del precio bruto es de "+precioTotalBruto+" pesos");
		//D si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
		if(porcentajePasajerosMayores > 50)
		{
			precioDescuento = precioTotalBruto - (precioTotalBruto * descuento);
			document.write("<br/> El precio final es de "+precioDescuento+" pesos");
		}
		else if(porcentajePasajerosMayores < 50)
		{
			precioDescuento = "El porcentaje es menor a 50%"
		}


}
