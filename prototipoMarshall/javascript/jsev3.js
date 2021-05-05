
function retirarejemplar()
{   
  var nombre = document.forms["sacarForm"]["fname"].value;
  var run = document.forms["sacarForm"]["frun"].value;
  var ejemplar = document.forms["sacarForm"]["fnameejemplar"].value;
  var nombreautor = document.forms["sacarForm"]["fautor"].value;
  var libroisbn = document.forms["sacarForm"]["fisbn"].value;
  var validacion = 0;
  if(run.length >= 7)
  {
    var array_run = document.forms["sacarForm"]["frun"].value;
    var patt = /\D/g;
    var ver_run = array_run.match(patt);
    if(ver_run == null)
    {
      validacion = 1;
    }
    else
    {
      alert("Ingrese solo numeros en el run");
    }
  }
  if( 
    (nombre.length > 0 && (nombre !== null || nombre !== undefined)) && 
    (run.length > 0 && (run !== null || run !== undefined)) &&
    (ejemplar.length > 0 && (ejemplar !== null || ejemplar !== undefined)) &&
    (nombreautor.length > 0 && (nombreautor !== null || nombreautor !== undefined)) &&
    (libroisbn.length > 0 && (libroisbn !== null || libroisbn !== undefined)) && (validacion == 1)
  )
  {
    alert("El usuario " + nombre + " ha retirado el libro "+ejemplar+" del autor "+ nombreautor);
    document.forms["sacarForm"].reset();
  }
  else
  {
    alert("Debe completar todos los campos");
  }
}

function reservarejemplar()
{   
  var nombre = document.forms["reservarForm"]["fnombrecom"].value;
  var run = document.forms["reservarForm"]["runsin"].value;
  var ejemplar = document.forms["reservarForm"]["nomejem"].value;
  var nombreautor = document.forms["reservarForm"]["autoejem"].value;
  var libroisbn = document.forms["reservarForm"]["isbnejem"].value;
  var validacion = 0;
  if(run.length >= 7)
  {
    var array_run = document.forms["reservarForm"]["runsin"].value;
    var patt = /\D/g;
    var ver_run = array_run.match(patt);
    if(ver_run == null)
    {
      validacion = 1;
    }
    else
    {
      alert("Ingrese solo numeros en el run");
    }
  }
  if( 
    (nombre.length > 0 && (nombre !== null || nombre !== undefined)) && 
    (run.length > 0 && (run !== null || run !== undefined)) &&
    (ejemplar.length > 0 && (ejemplar !== null || ejemplar !== undefined)) &&
    (nombreautor.length > 0 && (nombreautor !== null || nombreautor !== undefined)) &&
    (libroisbn.length > 0 && (libroisbn !== null || libroisbn !== undefined)) && (validacion == 1)
  )
  {
    alert("El usuario " + nombre + " ha reservado el libro "+ejemplar+" del autor "+ nombreautor);
    document.forms["reservarForm"].reset();
  }
  else
  {
    alert("Debe completar todos los campos");
  }
}

function contactoro()
{   
  var nombre = document.forms["formulariote"]["nombrezote"].value;
  var apellido = document.forms["formulariote"]["apellidote"].value;
  var correo = document.forms["formulariote"]["correote"].value;
  var descripcion = document.forms["formulariote"]["descripcionote"].value;
  if( 
    (nombre.length > 0 && (nombre !== null || nombre !== undefined)) && 
    (apellido.length > 0 && (apellido !== null || apellido !== undefined)) &&
    (correo.length > 0 && (correo !== null || correo !== undefined)) &&
    (descripcion.length > 0 && (descripcion !== null || descripcion !== undefined))
  )
  {
    alert("El usuario " + nombre + " ha enviado una solicitud de contacto a Admins del Website ");
    document.forms["formulariote"].reset();
  }
  else
  {
    alert("Debe completar todos los campos");
  }
}
