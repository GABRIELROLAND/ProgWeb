/estrutura return/
function dividir(x,y){
	return x/y
}
alert(dividir(12,2));
var x=prompt("Entre com primeiro valor1");
var y=prompt("Entre com primeiro valor2");
alert(dividir(x,y));
//multiplicar//
function multiplicar(x,y)
{
	return x*y
}
alert(multiplicar(10,10));
function multiplicar(x,y)
{
	return x*y

}
function somar(x,y){
	return x+y
}
var x=parseInt(prompt("Entre com primeiro valor1"));
var y=parseInt(prompt("Entre com primeiro valor2"));
alert(somar(x,y));
function subtracao(x,y)
{
	return x-y
}
var x=prompt("Entre com primeiro valor1");
var y=prompt("Entre com primeiro valor2");
alert(subtracao(x,y));

var valor=Math.abs(-123);
alert(valor);
//max-retorna o maior valor 
valor=Math.max(5,10);
alert(valor);
//min-retorna o menor valor
valor=Math.min(5,10);
alert(valor);
//pow-potencia numero elevado
valor=Math.pow(4,2);
alert(valor);
//round-para arredondar matematicamente

 valor=Math.round(13.2);//arredonda matematicamente
 alert(valor);
 valor=Math.ceil(13.2);//arredonda  sempre para cima
 alert(valor);
 valor=Math.floor(13.8);//arredonda sempre para baixo
 alert(valor);
 //sqrt - Raiz quadrada
 valor=Math.sqrt(16);
 alert(valor);
 //metodo get do obejeto date
 var data=new Date(); 
 alert(data.getDay());
 alert(data.getMonth());
alert(data.getFullYear());
var hoje=new Date();
alert("ano atual é:"+hoje.getFullYear());

