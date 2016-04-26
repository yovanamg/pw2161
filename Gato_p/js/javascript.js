var turno = false;
var letraCasilla = "";
var cuantaJuego = 0;
var cuentaJugadas = 0;

function iniciaGato()
{
	//preguntar si el navegagor es compatible con localStorage
	if(typeof(Storage) != "unidefined")
	{
		if(localStorage.webCuentaJuego)
		{
			cuantaJuego = porseInt(localStorage.webCuentaJuego);
			cuentaJuego = cuentaJuego + 1;
		}
		else
		{
			cuentaJuego = 1;
		}
		document.getElementById("tituloJuego").innerHTML = "Juego del Gato (#"+cuentaJuego+")";
	}
	else
	{
		alert("¡Utiliza un navegador mas actualizado!");
	}
}

function validaJugada(letra)
{
	var ganador = false;
	var b11 = document.getElementById("n11").innerHTML;
	var b12 = document.getElementById("n12").innerHTML;
	var b13 = document.getElementById("n13").innerHTML;
	var b21 = document.getElementById("n21").innerHTML;
	var b22 = document.getElementById("n22").innerHTML;
	var b23 = document.getElementById("n23").innerHTML;
	var b31 = document.getElementById("n31").innerHTML;
	var b32 = document.getElementById("n32").innerHTML;
	var b33 = document.getElementById("n33").innerHTML;
	//jugadas
	//renglones
	if(b11==b12 && b12==b13 && b11!="&nbsp;")
	ganador = true;
	if(b21==b22 && b22==b23 && b21!="&nbsp;")
	ganador = true;
	if(b31==b32 && b32==b33 && b31!="&nbsp;")
	ganador = true;
	//columnas
	if(b11==b21 && b21==b31 && b11!="&nbsp;")
	ganador = true;
	if(b12==b22 && b22==b32 && b12!="&nbsp;")
	ganador = true;
	if(b13==b23 && b23==b33 && b13!="&nbsp;")
	ganador = true;
	//diagonales
	if(b11==b22 && b22==b33 && b11!="&nbsp;")
	ganador = true;
	if(b13==b22 && b22==b31 && b13!="&nbsp;")
	ganador = true;
	//quien gano
	if (ganador == true) //if(ganador)
	{
		alert("¡ganador" + letra + "!");
	}
	else if (ganador == false && cuentaJugadas == 9)
	{
		alert("¡Empate!")
	}
}

function escribe(casilla)
{
	var letra = "";
	letraCasilla = document.getElementById(casilla).innerHTML;
	//if(letraCasilla == "&nbsp")
	if (letraCasilla !="X" && letraCasilla !="O")
	{
		if(turno == false) //if(!turno)
			letra = "X";
		else
			letra = "O";
			document.getElementById(casilla).innerHTML = letra;
			turno = !turno; //turno = false
	}
	cuentaJugadas = cuentaJugadas + 1;
	//para saber quien gano validamos la jugada
	validaJugada(letra);
}
