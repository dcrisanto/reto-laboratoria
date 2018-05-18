var principal = function() {
  var name = pedirNombre().toUpperCase();
  var quiereJugar = preguntarSiQuiereJugar(name, 'Hola');
  if (!quiereJugar){
    mostrarEnPantalla('<h3>Hasta luego ' + name + ', nos hubiera gustado que participes</h3>');
    return;
  }
  mostrarEnPantalla('<h3>Bienvenid@!! ' + name + ', Comenzó GeoTrivia: ');
  mostrarpreguntar();
}

var pedirNombre = function(){
  var name = prompt('¿Cuál es tu nombre?');
  return name;
}

var preguntarSiQuiereJugar = function(nombreJugador, param2) {
  var quiereJugar = confirm(param2 + ' ' + nombreJugador + ' ¿Estás seguro que deseas iniciar el reto?');
  return quiereJugar;
}

var mostrarEnPantalla = function(content) {
  var welcomeTextContainer = document.getElementsByClassName('welcomeText')[0];
  welcomeTextContainer.innerHTML = content;
  return;
}

var mostrarpreguntar=function(){
  var quizContainer = document.getElementsByClassName("quiz")[0];
  quizContainer.classList.remove("hidden");
  return;
}

var evaluarQuiz=function(){
  var allQuiz = document.getElementsByClassName("questionsContainer");
  for (var i = 0; i < allQuiz.length ; i++) {
    limpiar(allQuiz[i]);
    var alternatives = allQuiz[i].getElementsByClassName("alternative");
    var result = evaluarAlternativas(alternatives);
    if (result) {
      allQuiz[i].classList.add("success");
    } else {
      allQuiz[i].classList.add("error");
    }
  }
}

var limpiar=function(quiz) {
  quiz.classList.remove("success");
  quiz.classList.remove("error");
}

var evaluarAlternativas=function(alternativas){
  var isOK = false;
  for (var i = 0; i < alternativas.length; i++){
    var alt = alternativas[i];
    if (alt.checked) {
      isOK = alt.classList.contains("correcta");
    }
  }
  return isOK;
}
