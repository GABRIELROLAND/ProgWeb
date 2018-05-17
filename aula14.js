function luz(n)
{
	if (n == 1)//Ligada
	{
		document.getElementById('luzes').src ='https://i.stack.imgur.com/ybxlO.jpg';
	}
	if (n == 2)// Quebrada
	{
		document.getElementById('luzes').src ='https://i.stack.imgur.com/MRjsF.jpg';
	}
	if (n == 3 )//apagada
	{
		document.getElementById('luzes').src ='https://i.stack.imgur.com/b983w.jpg';
	}
}
