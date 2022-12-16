
// Perguntar a temperatura em Celsius
// ParseInt: passar a temperatura de string para number
var temperature = parseInt(prompt('Insira a temperatura em graus Celsius (°C)'));


// Converter para Farenheit: T(°F) = ( T(°C) × 1.8 ) + 32.)

var convertToFarenheit = (temperature*1.8) + 32;

// Mostrar a temperatura no console

console.log("A temperatura em Farenheit é: "+ convertToFarenheit);

// Mostrar o resultado no site

document.write("A temperatura em Farenheit é: "+ convertToFarenheit);