// Funcion Principal
var principal = function() {
  iniciarPartida();
  evaluarIniciar();
}
//Mostrar Inicio de Juego
var iniciarPartida = function() {
  var quiereIniciarPartida = document.getElementsByClassName("datos")[0];
  quiereIniciarPartida.classList.remove("hidden");
  return quiereIniciarPartida;
}
//Obtener Nombre del usuario ingresado en el formulario
var obtenerNombreUsuario= function (){
    var valor = document.getElementById("nombreUsuario").value;
    document.getElementById("bienvenida").innerHTML=("😊 Bienvenid@ " + valor + " 😊");
    return valor;
}
// Evaluamos las respuestas del usuario (para iniciar el juego)
//var evaluarIniciar=function(){