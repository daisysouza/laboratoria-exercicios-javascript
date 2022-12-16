// Perguntar a idade por meio de um prompt

var age = parseInt(prompt('Qual é a sua idade?'));

//converter a idade em segundos

var ageInSeconds = age*360*24*60*60 


document.write("Em seus "+ age +" anos de iadade, se passaram "+ ageInSeconds + " segundos");

var age = document.getElementById('idade');
