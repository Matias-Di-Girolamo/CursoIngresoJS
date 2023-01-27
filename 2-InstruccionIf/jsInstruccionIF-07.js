function mostrar()
{
	edad=parseInt(txtIdEdad.value);
	estado=estadoCivil.value;
	if (edad<='17'&&estado!='Soltero'){
	alert("Es muy pequeño para NO ser soltero");
}
}