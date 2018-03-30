//metado set e para redefinir os valores
//funçao setFullYear - para alterar o ano

var data=new Date();
alert(data.setFullYear("2015"));
alert(data);

//funçao ate -para alterar a data
var data=new Date();
alert(data.setDate("15"));
alert(data);

//funçao setMonth - para alterar o mes
var data=new Date();
alert(data.setMonth("5"));
alert(data);

//funçao toDate String - converte a data em uma String
var data=new Date();
alert(data.toDateString());
alert(data);
var tecnologia="JavaScript";
switch(tecnologia){
  case: "javaScript";
  case:"C++";
  case:"Java";
  case:"C#";
  alert("Linguagem de programaçao");
  break;
  case:"MySql";
  case:"Oracle";
  case:"Post gresql";
  alert("Linguagem para banco de dados");
  break;
  default:
  alert("Tecnologia desconhecida");
}
11-imprima o mes correspondente ,caso seja digitado uma informaçao invalida,imprimir uma mensagem esclarecedora*/
var mes=prompt("Digite o numero do mes");
