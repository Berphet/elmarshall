
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

function buscar()
{ 	
	var palabra_buscar = document.forms["forms_buscar"]["fbuscar"].value;

  if(palabra_buscar.length > 0 && (palabra_buscar !== null || palabra_buscar !== undefined))
  {
    var pathname = window.location.pathname;
    var pathname_split = pathname.split("/");
    
    while(pathname_split[pathname_split.length-1] != "MARSHALL_GALLARDO_YANEZ_Y_JUAN_GALVEZ_VALENZUELA")
    {
      pathname_split.pop();
    }

    pathname = pathname_split.join("/");
    window.open(pathname + "/paginasmenu/resultado.html","_self"); 
  }
  else
  {
  	alert("Debe ingresar una palabra a buscar.");
  }
}

function imagen_aumento(x) 
{
  if(imagen_click_bool!== true)
  {
    x.style.width = "30%";
    x.style.height = "30%";
    document.getElementById("cuadrado").style.width="200px";
    document.getElementById("cuadrado").style.height="230px";
    document.getElementById("features").style.height="97%";
  }
}

function img_normal(x) 
{
  if(imagen_click_bool!== true)
  {
    x.style.width = "25%";
    x.style.height = "25%";
    document.getElementById("cuadrado").style.width="244px";
	  document.getElementById("cuadrado").style.height="144px";
    document.getElementById("features").style.height="97%";
  }
}

var imagen_click_bool = false; 
var tabla_click_bool = false;  

function tabla_aumento(x) 
{
  if(tabla_click_bool!==true)
  {
    x.style.width = "130%";
    document.getElementById("features").style.height="55%";
  }
}


function tabla_normal(x) 
{
  if(tabla_click_bool!==true)
  {
    x.style.width = "105%";
	  document.getElementById("features").style.height="97%";
  }
}

function img_click(x)
{
  if(imagen_click_bool === false)
  {
    img_hover(x);
    imagen_click_bool = true;
  }
  else
  {
    img_normal(x);
    imagen_click_bool = false;
  }
}

function tabla_click(x)
{
  if(tabla_click_bool === false)
  {
    tabla_hover(x);
    tabla_click_bool = true;
  }
  else
  {
    tabla_normal(x);
    tabla_click_bool = false;
  }
}
