//array avançado - Multidimensional, associativo e Funçoes (every,some,filter)
var pessoas=["Ricardo","Sandra"];//possui 1 dimensao
document.write(pessoas[0]);
document.write(" ,");
document.write(pessoas[1]);
var pessoas=[["Paulo","M"],["Sandra","F"]];
document.write(" ,");
document.write(pessoas[1][1]);
var pessoas=[["Paulo","M"],["Sandra","F"],["Eva","brasileira"]];//possui 3 dimensao
document.write(" ,");
document.write(pessoas[2][0]);// O 2=Numero do array, 0=posiçao do conteudo dentro desse array

//Exemplo de array associativos

var pessoas={
	nome:"Gabriel",
	cidade:"Niteroi"
};
document.write(" ,");
document.write(pessoas["nome"]);
document.write(" ,");
document.write(pessoas["cidade"]);
//Funçao Every - verifica se todos os elementos satisfaz a avaliçao que foi submetida(todos)
var frutas=["maça","banana","laranja","abacaxi",123];
function todos(elem,ind,obj){
	return(typeof elem=="string");
}
document.write(" ,");
document.write(frutas.every(todos));
 //Funçao some - verifica se pelo menos um dos elementos atende a condiçao
 var frutas=["maça","banana","laranja","abacaxi"];
function todos(elem,ind,obj){
	return(typeof elem=="string");
}
document.write(" ,");
document.write(frutas.some(todos));
//funçao filter - ela filtra o array com base na busca que foi feita
 var frutas=["maça","banana","laranja","abacaxi"];
function todos(elem,ind,obj){
	return(elem.indexOf("m")>=0);
}
document.write(" ,");
document.write(frutas.filter(todos));	