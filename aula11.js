//mostrar os elementos do array começa sempre da posiçao 0.
//podemos criar um array de 3 maneiras diferentes;construtora , literal e sem definiçao.
var paises=new Array ("Brasil","Russia","India","China");
document.write(paises);
document.write("<br>");

//Mostrar a posiçao dos elementos no array.
var paises=new Array ("Brasil","Russia","India","China");

document.write(paises[3]);
document.write("<br>");

//funçao length - mostra a quantidade de elementos que temos dentro do array.

 var paises=new Array ("Brasil","Russia","India","China");

document.write(paises.length);
document.write("<br>");

//utilizando a estrutura de loop - for

var paises=new Array ("Brasil","Russia","India","China");
for(var i=0;i<paises.length;i++)
{
	document.write(paises[i]);
	document.write(", ");
}
//indexOf - identifica qual posiçao que o elemento se encontra

var paises=new Array ("Brasil","Russia","India","China");
document.write(paises.indexOf("India"));

//lastIndexOf - informa qual a ultima ocorrencia de um determinado elemento 
var paises=new Array ("Brasil","Russia","India","China");
document.write(paises.lastIndexOf("Brasil"));

// sintaxe literal - [] .
var paises= ["Brasil","Russia","India","China"];
document.write(paises);

//uma string tb pode ser um array 
var s="Açai";
document.write(s.length);

//mostrar uma determinada letra em uma determinada posiçao
var s="Açai";
document.write(s[2]);
 //usando o for
 var s="Açai";
 for (var i=0;i<s.length;i++)
 {
 	document.write(s[i]);
 }
//utilizando array sem o construtor 

var frutas= new Array();
frutas[0]="Maça";
frutas[1]="uva";
frutas[2]="pera";
frutas[3]="melancia";
document.write(frutas);
