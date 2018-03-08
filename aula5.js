  //operadores lógicos and &&,or ||,not!
  //operador logico and &&
  var x=6;
  alert((x>=1) && (x<=10));
  var y=prompt("Entre com um numero");
  alert((y>=1) && (y<=10));
  //operador logico or ||
  var x=6;
  alert((x>=1) || (x<=5));
  var y=prompt("entre com um numero");
  alert((y>=1) || (y<=5));
  //operador not !
  var a=6;
  alert(!(a>=1));
  //operador ternário
  //expressao?verdadeiro:falso
  var idade=prompt("qual e a sua idade");
  var x=(idade>=18)?"maior idade":"menor idade";
  alert(x);
  //operador delete -para remover um atributo do obejto
  pessoa={
    nome:"Gabriel"
  }
  alert(pessoa.nome);
delete pessoa.nome;
alert(pessoa.nome);
//operador in-indica se existe a propriedade esoecifica
pessoa={
  nome:"Lucas"
}
alert("nome"in pessoa);
alert("email"in pessoa);
//operador this - mostra o titulo da pagina
alert(this.document.title);
//parseInt
var num1=parseInt(prompt("Entre com o 1 Numero"));
var num2=parseInt(prompt("Entre com o 2 Numero"));
var soma=num1+num2;
alert(soma);
//metodo confirm()
confirm("Tem certeza que voce e Gabriel");
