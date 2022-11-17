/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	numerouno=txtIdNumeroUno.value
	numerodos=txtIdNumeroDos.value
	resultado = parseInt(numerouno)+parseInt(numerodos);
	alert('La suma es '+resultado);	
}

function restar()
{
	numerouno=txtIdNumeroUno.value
	numerodos=txtIdNumeroDos.value
	resultado = parseInt(numerouno)-parseInt(numerodos);
	alert('La resta es '+resultado);
	
}

function multiplicar()
{ 
	numerouno=txtIdNumeroUno.value
	numerodos=txtIdNumeroDos.value
	resultado = parseInt(numerouno)*parseInt(numerodos);
	alert('La multiplicacion es '+resultado);
	
}

function dividir()
{
	numerouno=txtIdNumeroUno.value
	numerodos=txtIdNumeroDos.value
	resultado = parseInt(numerouno)/parseInt(numerodos);
	alert('La division es '+resultado);
	
}