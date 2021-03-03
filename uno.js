
function mostrar()
{
	var  nombreProductoIngresado;
	var precioProductoIngresado;
	var cantidadUnidadesIngresadas;
	var tipoInflamableIngresado;
	var marcaIngresada;
	var contadorAlcohol = 0;
	var contadorIac = 0;
	var contadorQuat = 0;
	var acumuladorAlcohol = 0;
	var acumuladorIac = 0;
	var acumuladorQuat = 0;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var tipoInflamableMayor;
	var cantidadInflamableMayor;
	var acumuladorIac200 = 0;
	var mayorPrecio;
	var tipoMayorPrecio;
	var marcaMayorPrecio;

	for(i = 0; i < 5; i++)
	{
		nombreProductoIngresado = prompt("Ingrese el nombre del producto (alcohol-iac-quat)");
		while(nombreProductoIngresado != "alcohol" && nombreProductoIngresado != "iac" && nombreProductoIngresado != "quat")
		{
			nombreProductoIngresado = prompt("Dato inválido. Ingrese nuevamente el nombre del producto");
		}
		precioProductoIngresado = prompt("Ingrese el precio del producto ");
		precioProductoIngresado = parseInt(precioProductoIngresado);
		while(isNaN(precioProductoIngresado) || precioProductoIngresado < 100 || precioProductoIngresado > 300)
		{
			precioProductoIngresado = prompt("Dato inválido. Ingrese nuevamente el precio del producto");
			precioProductoIngresado = parseInt(precioProductoIngresado);
		}
		cantidadUnidadesIngresadas = prompt("Ingrese las cantidades del producto)");
		cantidadUnidadesIngresadas = parseInt(cantidadUnidadesIngresadas);
		while(isNaN(cantidadUnidadesIngresadas) || cantidadUnidadesIngresadas < 1 || cantidadUnidadesIngresadas > 1000)
		{
			cantidadUnidadesIngresadas = prompt("Dato inválido. Ingrese nuevamente la cantidad del producto");
			cantidadUnidadesIngresadas = parseInt(cantidadUnidadesIngresadas);
		}
		tipoInflamableIngresado = prompt("Ingrese el tipo de inflamable");
		while(tipoInflamableIngresado != "ignifugo" && tipoInflamableIngresado != "combustible" && tipoInflamableIngresado != "explosivo")
		{
			tipoInflamableIngresado = prompt("Dato inválido. Ingrese nuevamente el tipo de inflamable");
		}
		marcaIngresada = prompt("Ingrese el nombre la marca");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("Dato inválido. Ingrese nuevamente la marca");
		}

		//a) El promedio de cantidad por tipo de producto
		switch(nombreProductoIngresado)
		{
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol += cantidadUnidadesIngresadas;
				break;
			case "iac":
				contadorIac++;
				acumuladorIac += cantidadUnidadesIngresadas;
				//C
				if(precioProductoIngresado <= 200)
				{
					acumuladorIac200 += cantidadUnidadesIngresadas;
				}
				break;
			case "quat":
				contadorQuat++;
				acumuladorQuat += cantidadUnidadesIngresadas;
				break;
		}

		// b) El tipo de inflamable con más cantidad de unidades en total de la compra
		if(i == 0)
		{
			cantidadInflamableMayor = cantidadUnidadesIngresadas;
			tipoInflamableMayor = tipoInflamableIngresado;
		}
		else if(cantidadUnidadesIngresadas > cantidadInflamableMayor)
		{
			cantidadInflamableMayor = cantidadUnidadesIngresadas;
			tipoInflamableIngresado = tipoInflamableIngresado
		}

		//d) la marca y tipo del más caro de los productos
		if(i == 0)
		{
			mayorPrecio = precioProductoIngresado;
			tipoMayorPrecio = nombreProductoIngresado;
			marcaMayorPrecio = marcaIngresada;
		}
		else if(precioProductoIngresado > mayorPrecio)
		{
			mayorPrecio = precioProductoIngresado;
			tipoMayorPrecio = nombreProductoIngresado;
			marcaMayorPrecio = marcaIngresada;
		}


	}
	
	//A 

	//Promedio alcohol:
	promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
	document.write("<br/> El promedio del alcohol es "+promedioAlcohol);
	//Promedio IAC:
	promedioIac = acumuladorIac / contadorIac;
	document.write("<br/> El promedio del IAC es "+promedioIac);
	//Promedio QUAT:
	promedioQuat = acumuladorQuat / contadorQuat;
	document.write("<br/> El promedio del QUAT es "+promedioQuat);
	//B
	document.write("<br/> El tipo de inflamable con más cantidad de unidades en total de la compra es "+ tipoInflamableMayor);

	//C
	document.write("<br/> En total se compraron "+acumuladorIac200+" unidades de iac por menos de $200");

	//D
	document.write("<br/> El tipo de los productos más caros es "+tipoMayorPrecio+" y la marca "+marcaMayorPrecio);


}