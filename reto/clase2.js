/*var name=prompt('¿Cuál es tu nombre?');
var nameUpper=name.toUpperCase();
console.log(nameUpper);
var age=parseInt(prompt('¿Cuál es tu edad?'));

if (age < 18) {
  alert(nameUpper + ' eres menor de edad');
} else {
  var hasDni = confirm('¿Tienes DNI?');
  if (hasDni) {
    alert(nameUpper + ', eres peruan@ mayor de edad');
  } else {
    alert(nameUpper + ', eres mayor edad, pero no peruano');
  }
}
*/

var functionClase2 = function() {
  var name=prompt('¿Cuál es tu nombre?');
  var nameUpper=name.toUpperCase();
  var age=parseInt(prompt('¿Cuál es tu edad?'));
  if (age < 18) {
    alert(nameUpper + ' eres menor de edad');
    return;
  }
  var hasDni = confirm('¿Tienes DNI?');
  if (hasDni) {
    alert(nameUpper + ', eres peruan@ mayor de edad');
  } else {
    alert(nameUpper + ', eres mayor edad, pero no peruano');
  }
  return;
}

functionClase2();
