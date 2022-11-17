/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	numerouno=txtIdNumeroUno.value
	numerodos=txtIdNumeroDos.value
	resultado = parseInt(numerouno)+parseInt(numerodos);
	alert('La suma es '+resultado);
}