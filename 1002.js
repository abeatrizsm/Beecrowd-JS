var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var raio = parseFloat(prompt("Insira o tamanho do raio: "));
    var area = 3.14159 * raio * raio;

    console.log("A=" + area.toFixed(4));
