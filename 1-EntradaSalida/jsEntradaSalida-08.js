/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	dividendo=txtIdNumeroDividendo.value
	divisor=txtIdNumeroDivisor.value
	resultado = parseInt(divisor)% parseInt(dividendo);
	alert("El resultado es " + resultado);
}
