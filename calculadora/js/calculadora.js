//variable gloal
var operador ="";

function igual()
{
	var valor1 = document.calculadora.operador1.value;
	var valor2 = document.calculadora.operador2.value;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
}

function numeros(num)
{
	if(operador == "")//escribir en el operador1
	{
		var valor = document.calculadora.operador1.value;
		if(valor == "0")//vaciar la caja
			document.calculadora.operador1.value = "";
			//concatenar los valores de num con los del operando1
			document.calculadora.operador1.value =
			document.calculadora.operador1.value + num;
    }
		else
		{
			var valor = document.calculadora.operador2.value;
		    if(valor == "0")//vaciar la caja
			document.calculadora.operador2.value = "";
			//concatenar los valores de num con los del operando1
			document.calculadora.operador2.value =
			document.calculadora.operador2.value + num;
		}
}

function operadores(ope)
{
	operador = ope;
}

function borrar()
{
	operador = "";
	document.calculadora.operador1.value = 0;
	document.calculadora.operador2.value = 0;
	document.calculadora.resultado.value = 0;
}