// Perguntar as entradas
var income = parseInt(prompt("Qual é o valor da entrada?"));

// Perguntar as saídas
var costs = parseInt(prompt("Qual é o valor da saída?"));

//Porcentagem dos impostos
var taxPercent = parseInt(prompt("Qual o valor dos impostos?"));


//renda bruta
var grossProfit = income - costs;

//obtendo o valor dos impostos
var tax = grossProfit*taxPercent/100;

// renda liquida
var netIncome = grossProfit - tax; 

// mostrar na página web
document.write("Sua renda líquida é de $"+ netIncome);