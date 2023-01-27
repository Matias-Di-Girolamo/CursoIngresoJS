function mostrar()
{
	var mes=txtIdMes.value;
	switch (mes){
		default:
			alert ('Este mes tiene 30 dias o mas');
			break;
		case 'Febrero':
			alert ('Este mes no tiene mas de 29 dias');
			break;
	}
}