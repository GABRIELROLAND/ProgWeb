//Para achar erros no JS basta dar F12 no naveador que ele mostra o erro.
var nome=prompt("Qual o seu nome?");
alert("Coe, "+nome);
var idade=prompt("Qual a sua idade?");
document.write(nome+ " "+idade);
//Operadores matematicos: +, -, *, /, %
var soma=10+4;
document.write("<br><br>A soma dos numeros é: "+soma);
var soma="5"+"5"; //O + irá contatenar os itens dentro das aspas, assumindo-os como string.
document.write("<br><br>O numero contatenado é: "+soma);
var soma=5+"5"; //A partir do momento que tem uma string, o JS contatena e repete a resposta anterior.
document.write("<br><br>O numero contatenado é: "+soma);
//Subtração
var sub=10-4;
document.write("<br><br>A subtração dos numeros é: "+sub);
//Multiplicação
var mult=10*4;
document.write("<br><br>A multiplicação dos numeros é: "+mult);
//Divisão
var div=10/4;
document.write("<br><br>A divisão dos numeros é: "+div);
//Resto da divisão
var mod=10%4
document.write("<br><br>O resto da divisão dos numeros é: "+mod);
//string
var string=("<br><br>Oi,\u00A0"+"Tudo bem?<br><br>");
document.write(string);
//Operadores de comparação
//Operador igual ==
var a=6;
alert(a==6);
//Operador igual e identico
var a=6;
alert(a==="6"); // Vai dar falso pois um esta declarado como inteiro (a=6) e o outro como string (a="6")
//Operador diferente !=
var a=6;
alert(a!=7);
//Operador identidade diferente !==  Verifica tanto o dado quanto o tipo
var a=6;
alert(a!==6);
//Operador maior >
var a=6;
alert(a>7);
//Operador maior >=
var a=6;
alert(a>=6);
//Operador menor <
var a=6;
alert(a<7);
//Operador menor <=
var a=6;
alert(a<=6);
