"use strict";
function checkInput(userInput) {
    return !(userInput === '' || isNaN(userInput));
}

function answer( a, b, dis ) {
    if (dis > 0) {
      alert((-b + Math.sqrt(dis)) / (2 * a));
      alert((-b - Math.sqrt(dis)) / (2 * a));
    } else if (dis === 0) {
      alert(-b/(2 * a));
    } else {
      alert('no solution (when Discriminant < 0)');
    }
}

var a = +prompt('Input first variable');
var b = +prompt('Input second variable');
var c = +prompt('Input third variable');

if ( checkInput(a) && checkInput(b) && checkInput(c) ) {
  var dis = Math.pow(b, 2) - 4 * a * c;
  answer(a, b, dis);
    } else {
      alert('Invalid input date');
}
