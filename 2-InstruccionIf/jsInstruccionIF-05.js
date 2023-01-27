//function mostrar()
{
	edad=parseInt(txtIdEdad.Value);
	if (!(edad>='13'&&edad<='17')){
		alert('No eres adolescente');
	}
}

 function mostrar()
{
	edad=parseInt(txtIdEdad.value);
	if (edad>='13'&&edad<=17){
		void(0);
	} else {
		alert('No eres adolescente')
	}
}