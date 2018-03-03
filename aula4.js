var idade=10;
if(idade<15)
{
	alert("Criança");
}
var numero=17;
if((numero%2)==0)
{
	alert("\nPar");
}
else
{
	alert("\nImpar");
}
var passou=true;
if(passou)
{
	alert("\nAprovado!!");
}

//exemplos de else
var idade=12;
if(idade<11)
{
	alert("\nCriança");
}
else
{
	alert("\nAdulto");
}
var passou=false;
if(passou)
{
	alert("\nAprovado");
}
else
{
	alert("\nEstuda mais um Pouco!!!!");
}
// Exemplo de if dentro do else
var idade=61;
if(idade<=11)
{
	alert("Criança");
}
	else if(idade>11 && idade<=16)
	{
		alert("Pre adolescente");
	}
	else if(idade>16 && idade<=21)
	{
		alert("Adolescente");
	}
	else if(idade>21 && idade<60)
	{
		alert("Adulto");
	}
	else
	{
		alert("Melhor Idade");
	}
	//Exemplo if dentro de outro if
	var nota=6;
	if(nota>=7)
	{
		alert("aprovado");
	}
	else
	{
		alert("reprovado");
	}
	if(nota==6)
	{
		alert("Voce esta em Recuperaçao");
	}
