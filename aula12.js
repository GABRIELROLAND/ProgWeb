//funçao de ordernaçao - reverse - inverte a ordem dos elementos no array
var disc=["Prog Web II","Matematica Discreta","Prog Web I","PHP"];
document.write(disc.reverse());

//Funçao de ordernaçao - sort - ordena em ordem alfabetica os elementos do array
var disc=["Prog Web II","Matematica Discreta","Prog Web I","PHP"];
document.write("   |||||||||  ");
document.write(disc.sort());

//Cortes e Emendas - metodo join - para alterar o separador padrao

var disc=["Prog Web II","Matematica Discreta","Prog Web I","PHP"];
document.write("<br>"+disc.join("  "));

var disc=["Prog Web II","Matematica Discreta","Prog Web I","PHP"];
document.write("<br>"+disc.join("*_*"));

//Cortes e Emendas - Metodo concat - concatenar elementos no array(inserir)
//essa concatenaçao é feita no final do array

var disc=["Prog Web II","Matematica Discreta","Prog Web I","PHP"];
document.write("<br>"+disc.concat("Banco de dados","Ser Humano"));

//cortes e Emendas - metodo slice - retorna um subarray

var disc=["Prog Web II","Matematica Discreta","Prog Web I","PHP"];
document.write("<br>"+disc.slice(2));

var disc=["Prog Web II","Matematica Discreta","Prog Web I","PHP"];
document.write("<br>"+disc.slice(1,3));

//Cortes e Emendas - Metodo splice - utilizado para remover um elemento do array
var disc=["Prog Web II","Matematica Discreta","Prog Web I","PHP"];
document.write("<br>"+disc.splice(1,3,"CSS","HTML","JS"));
document.write("<br>"+disc);

//Filas FIFO - (first in first out - o primeiro a entrar eo primeiro a sair)
//metodo push - adiciona elementos no final da fila 
var pessoas=["Maria","Jose","Adão","Eva"];
document.write("<br>"+pessoas.push("Mario"));
document.write("<br>"+pessoas);

//metodo shift - remove o primeiro elemento da fila

var pessoas=["Maria","Jose","Adão","Eva"];
document.write("<br>"+pessoas.shift());
document.write("<br>"+pessoas);

//metodo pop - remove o ultimo elemento da fila

var pessoas=["Maria","Jose","Adão","Eva"];
document.write("<br>"+pessoas.pop());
document.write("<br>"+pessoas);

//metodo unshift - adiciona elemento no inicio da fila

//metodo shift - remove o primeiro elemento da fila

var pessoas=["Maria","Jose","Adão","Eva"];
document.write("<br>"+pessoas.unshift("Fura Fila"));
document.write("<br>"+pessoas);
