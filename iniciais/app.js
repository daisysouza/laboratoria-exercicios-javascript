// Perguntar nome e sobrenome
var name = prompt("Qual é o seu nome e sobrenome?");

// pegar a primeira letra do primeiro nome
var firstInitial = name.slice(0,1);

//pegar a posição da primeira letra do sobrenome
// pegar a posição exata do espaço
var secondInicialPosition = name.indexOf(" ") + 1;

// pegar a primeira letra do segundo nome
var secondInicial = name.slice(secondInicialPosition, secondInicialPosition + 1);

// exibir
document.write("Suas iniciais são: "+ firstInitial.toUpperCase() + secondInicial.toUpperCase());

