function mostrar()
{
	var examen;

	examen=Math.floor(Math.random()*11);
	console.log(examen);

	if(examen <='3'){
		alert('Vamos que la proxima se puede');	
	} else if (examen >='4'&&examen<='8'){
		alert ('Aprobo');
	} else {
		alert ('Excelente')
	}
}