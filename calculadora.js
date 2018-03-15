	function dividir(){
  	var valor1 = document.getElementById("valor1").value;
  	var valor2 = document.getElementById("valor2").value;
  	var valor4=valor1/valor2;
  	document.getElementById('resultado').value = valor4;
  	}
	function multiplicar(){
  	var valor1 = document.getElementById("valor1").value;
  	var valor2 = document.getElementById("valor2").value;
  	var valor4=valor1*valor2;
  	document.getElementById('resultado').value = valor4;
  	}
	function somar(){
  	var valor1 = parseInt(document.getElementById("valor1").value);
  	var valor2 =  parseInt(document.getElementById("valor2").value);
  	var valor4=valor1+valor2;
	document.getElementById('resultado').value = valor4;
  	}
	function subtrair(){
  	var valor1 = document.getElementById("valor1").value;
  	var valor2 = document.getElementById("valor2").value;
  	var valor4=valor1-valor2;
  	document.getElementById('resultado').value = valor4;
  	}
	function potencializar(){
  	var valor1 = document.getElementById("valor1").value;
  	var valor2 = document.getElementById("valor2").value;
  	var valor4=Math.pow(valor1,valor2);
  	document.getElementById('resultado').value = valor4;
  	}
