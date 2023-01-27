function mostrar()
{
	edad=parseInt(txtIdEdad.value);
	if (edad<'13'){
	alert('Eres un niño');
	} else if (edad>='13'&& edad<='17'){
	alert('Eres adolescente');
	} else {
		alert ('Eres mayor')
	}	
}