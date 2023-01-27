function mostrar()
{
	var mes=txtIdMes.value;
	switch (mes){
		default:
			alert ('Este mes tiene 31 dias');
			break;
	    case 'Febrero':
		alert ('Este mes tiene 28 dias');
		break;
	    case 'Abril':
	    case 'Junio':
	    case 'Septiembre':
	    case 'Noviembre':
		alert ('Este mes tiene 30 dias');
	}
}