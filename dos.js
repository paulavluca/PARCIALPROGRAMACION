function mostrar()
{
  var nombreIngresado;
  var tipoCursadaIngresada;
  var cantidadMateriasIngresadas;
  var sexoIngresado;
  var notaPromedioIngresada;
  var edadIngresada;
  var respuesta;
  var mejorPromedioFemenino;
  var contadorNotaFemenino = 0;
  var contadorNotaMasculino = 0;
  var contadorNotaNoBinario = 0;
  var acumuladorNotaFemenino = 0;
  var acumuladorNotaMasculino = 0;
  var acumuladorNotaNoBinario = 0;
  var promedioNotaFemenino;
  var promedioNotaMasculino;
  var promedioNotaNoBinario;
  var flagB = 0;
  var nombreMinimoB;
  var masJovenB;
  var flagCursada = 0;
  var edadMayorMaterias;
  var nombreMayorMaterias;
  var mayorMateriasNoRemotas;
  var flagA = 0;
  var mayorPromedio;
  var NombreMayorPromedio


  do
  {

    nombreIngresado = prompt("Ingrese el nombre");
    while(isNaN(nombreIngresado) == false)
    {
      nombreIngresado = prompt("Dato inválido. Ingrese nuevamente el nombre")
    }
    tipoCursadaIngresada = prompt("Ingrese el tipo de cursada('libre';'presencial';'remota'")
    while(tipoCursadaIngresada != "libre" && tipoCursadaIngresada != "presencial" && tipoCursadaIngresada != "remota")
    {
      tipoCursadaIngresada = prompt("Dato inválido. Ingrese nuevamente el tipo de cursada");
    }
    cantidadMateriasIngresadas = prompt("Ingrese la cantidad de materias")
    cantidadMateriasIngresadas = parseInt(cantidadMateriasIngresadas);
    while(isNaN(cantidadMateriasIngresadas) || cantidadMateriasIngresadas < 1 || cantidadMateriasIngresadas > 7)
    {
      cantidadMateriasIngresadas = prompt("Dato inválido. Ingrese nuevamente la cantidad de materias");
      cantidadMateriasIngresadas = parseInt (cantidadMateriasIngresadas)
    }
    sexoIngresado = prompt("Ingrese el sexo (femenino-masculino-no binario)")
    while(sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "no binario")
    {
      sexoIngresado = prompt("Dato inválido. Ingrese el sexo nuevamente");
    }
    notaPromedioIngresada = prompt("Ingrese su nota promedio");
    notaPromedioIngresada = parseInt(notaPromedioIngresada);
    while(notaPromedioIngresada < 0 || notaPromedioIngresada > 10)
    {
      notaPromedioIngresada = prompt("Dato inválido. Ingrese la nota nuevamente");
      notaPromedioIngresada = parseInt(notaPromedioIngresada);
    } 
    edadIngresada = prompt("Ingrese su edad");
    edadIngresada = parseInt(edadIngresada)
    while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 100)
    {
      edadIngresada = prompt("Dato inválido. Ingrese neuvamente la edad");
      edadIngresada = parseInt(edadIngresada);
    } 

    //D
    switch(sexoIngresado)
    {
      case "femenino":
        acumuladorNotaFemenino += notaPromedioIngresada;
        contadorNotaFemenino++;
        break;
      case "masculino":
        contadorNotaMasculino++;
        acumuladorNotaMasculino += notaPromedioIngresada;
        if(flagB == 0 && tipoCursadaIngresada == "libre")
        {
          masJovenB = edadIngresada;
          nombreMinimoB = nombreIngresado;
          flagB = 1;
        }
        else if(edadIngresada > masJovenB && tipoCursadaIngresada == "libre")
        {
          masJovenB = edadIngresada;
          nombreMinimoB = nombreIngresado;
        }
        break;
      case "no binario":
        acumuladorNotaNoBinario += notaPromedioIngresada;
        contadorNotaNoBinario++;
        break;
    }

      if(flagCursada == 0 && tipoCursadaIngresada != "remota")
      {
        mayorMateriasNoRemotas = cantidadMateriasIngresadas;
        nombreMayorMaterias = nombreIngresado;
        edadMayorMaterias = edadIngresada;
        flagCursada = 1;
      }
      else if(tipoCursadaIngresada != "remota" && cantidadMateriasIngresadas > mayorMateriasNoRemotas)
      {
        mayorMateriasNoRemotas = cantidadMateriasIngresadas;
        nombreMayorMaterias = nombreIngresado;
        edadMayorMaterias = edadIngresada;
      }


      //A
      if(flagA = 0 && sexoIngresado != "masculino")
      {
        mayorPromedio = notaPromedioIngresada;
        NombreMayorPromedio = nombreIngresado;
        flagA = 1
      }
      else if(sexoIngresado != "masculino" && notaPromedioIngresada > mayorPromedio)
      {
        mayorPromedio = promedioNotaNoBinario;
        NombreMayorPromedio = nombreIngresado;
      }



    respuesta = confirm("¿Desea continuar?")
  }while(respuesta == true)

    //A a) El nombre del mejor promedio que no sea masculino
    document.write("<br/> El nombre del mayor promedio de notas no masculino es "+NombreMayorPromedio);

    //B El nombre del mas joven de los alumnos entre los que la dan libre
    document.write("EL nombre de la persona más joven de los alumnos que dan la materia libre es "+nombreMinimoB);
    //D El promedio de nota por sexo
    //Femenino
    promedioNotaFemenino = acumuladorNotaFemenino / contadorNotaFemenino;
    document.write("<br/> El promedio de notas femeninas es de "+promedioNotaFemenino);
    //Masculino
    promedioNotaMasculino = acumuladorNotaMasculino / contadorNotaMasculino;
    document.write("<br/> El promedio de notas masculinas es de "+promedioNotaMasculino);
    //No binario
    promedioNotaNoBinario = acumuladorNotaNoBinario / contadorNotaNoBinario;
    document.write("<br/> El promedio de notas no binarios es de "+promedioNotaNoBinario);

    //F La edad y nombre del que cursa mas materias que no sean en forma remota
    document.write("<br/> El nombre de la persona que cursa más materias distintas a forma remota es "+nombreMayorMaterias+" y la edad es "+edadMayorMaterias+" años");


}
