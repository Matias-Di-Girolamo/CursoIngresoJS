function mostrar()
{
	var hora=txtIdHora.value;
	switch (hora){
		default:
			alert ('No es de mañana.');
			break;
		case '7':
		case '8':
		case '9':
		case '10':
		case '11':
			alert ('Es de mañana.');
	}
}