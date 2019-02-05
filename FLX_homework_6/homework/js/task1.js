function checkInput(userInput) {
  return !(userInput === '' || isNaN(userInput));
}

function answer(a, b, dis) {
  if (dis > 0) {
    alert('x1 = ' + (-b + Math.sqrt(dis)) / (2 * a));
    alert('x2 = ' + (-b - Math.sqrt(dis)) / (2 * a));
  } else if (dis === 0) {
    alert('x = ' + (-b / (2 * a)));
  } else {
    alert('no solution (when Discriminant < 0)');
  }
}

var a = +prompt('Input first variable');
var b = +prompt('Input second variable');
var c = +prompt('Input third variable');

if (checkInput(a) && checkInput(b) && checkInput(c)) {
  var dis = Math.pow(b, 2) - 4 * a * c;
  answer(a, b, dis);
} else {
  alert('Invalid input date');
}
