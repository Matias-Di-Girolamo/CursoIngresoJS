/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
sueldo=txtIdSueldo.value
//resultado = parseInt(sueldo*10)/100
resultado = parseInt(sueldo) + parseInt(sueldo*10)/100;
txtIdResultado.value=resultado;
}
