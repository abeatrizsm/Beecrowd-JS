var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var a = parseFloat(prompt("Insira a primeira nota: "));
var b = parseFloat(prompt("Insira a segunda nota: "));
var c = parseFloat(prompt("Insira a terceira nota: "));

var media = ((a*2)+(b*3)+(c*5))/10;

console.log("MEDIA = " + media.toFixed(1));
