//GMTString-Para definir o fuso horario internacional padrao para a configuraçao do relogio/*
var data=new Date();
alert(data.toGMTString());

//LocaleStringI-para definir o fuso horario local tem a funçao de /*
//formatar a data e hora usando as configuraçoes da String no computador*/
var data=new Date();
alert(data.toLocaleString());
//inserindo os valores//
var data=new Date(2014,2);
alert(data);

//inserindo o ano,mes,dia,hora,minutos,segundos,milesegundos//
var data=new Date(2011,2,22,4,65,30,1234);
alert(data);

//funçao gethours -para recuperar hora entre 0 e 23//
alert(data.getHours());

//funçao getUTCHours - para recuperar a hora universal 
var data=new Date();
alert(getUTCHours());
//funçao getDate - retorna o dia do mes entre 0 e 30 
var data=new Date();
alert(data.getDate());
//funçao getDay - retorna o dia da semana
var data=new Date();
alert(data.getDay()); 

//para mostrar o dia ou o mes escrito e nao atraves de numeros
var data=new Date();
var dias=["domingo","segunda","terça","quarta","quinta","sexta","sabado"];
alert(dias[data.getDay()]);

var data=new Date();
var meses=["janeiro","fevereiro","março","abril"];
alert(meses[data.getMonth()]);
//funçao getSeconds//
var data=new Date();
alert(data.getSeconds());

//funçao getTime - retorna a qunatidade de milisegundos//
var data=new Date();
alert(data.getTime());

