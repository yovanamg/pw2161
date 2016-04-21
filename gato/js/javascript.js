var bandera = true;

function clic(nombre)
{ 
	if(document.getElementById("n11").value == "")
	{
		if(nombre==n11)
		{
			if(bandera==true)
			{document.getElementById("n11").value="X"; bandera = false;}
			else
			{document.getElementById("n11").value="O"; bandera = true;}
		}
	}
	if(document.getElementById("n12").value == "")
	{
		if(nombre==n12)
		{
			if(bandera==true)
			{document.getElementById("n12").value="X"; bandera = false;}
			else
			{document.getElementById("n12").value="O"; bandera = true;}
		}
	}
	if(document.getElementById("n13").value == "")
	{
		if(nombre==n13)
		{
			if(bandera==true)
			{document.getElementById("n13").value="X"; bandera = false;}
			else
			{document.getElementById("n13").value="O"; bandera = true;}
		}
	}
	if(document.getElementById("n21").value == "")
	{
		if(nombre==n21)
		{
			if(bandera==true)
			{document.getElementById("n21").value="X"; bandera = false;}
			else
			{document.getElementById("n21").value="O"; bandera = true;}
		}
	}
	if(document.getElementById("n22").value == "")
	{
		if(nombre==n22)
		{
			if(bandera==true)
			{document.getElementById("n22").value="X"; bandera = false;}
			else
			{document.getElementById("n22").value="O"; bandera = true;}
		}
	}
	if(document.getElementById("n23").value == "")
	{
		if(nombre==n23)
		{
			if(bandera==true)
			{document.getElementById("n23").value="X"; bandera = false;}
			else
			{document.getElementById("n23").value="O"; bandera = true;}
		}
	}
	if(document.getElementById("n31").value == "")
	{
		if(nombre==n31)
		{
			if(bandera==true)
			{document.getElementById("n31").value="X"; bandera = false;}
			else
			{document.getElementById("n31").value="O"; bandera = true;}
		}
	}
	if(document.getElementById("n32").value == "")
	{
		if(nombre==n32)
		{
			if(bandera==true)
			{document.getElementById("n32").value="X"; bandera = false;}
			else
			{document.getElementById("n32").value="O"; bandera = true;}
		}
	}
	if(document.getElementById("n33").value == "")
	{
		if(nombre==n33)
		{
			if(bandera==true)
			{document.getElementById("n33").value="X"; bandera = false;}
			else
			{document.getElementById("n33").value="O"; bandera = true;}
		}
	}

var s11 = document.getElementById("n11").value;
var s12 = document.getElementById("n12").value;
var s13 = document.getElementById("n13").value;
var s21 = document.getElementById("n21").value;
var s22 = document.getElementById("n22").value;
var s23 = document.getElementById("n23").value;
var s31 = document.getElementById("n31").value;
var s32 = document.getElementById("n32").value;
var s33 = document.getElementById("n33").value;
var win=[s11,s12,s13,s21,s22,s23,s31,s32,s33];

if(win[s11],[s12],[s13]=="X")
{
	alert("ganaste! yujuuu :D")
}
else
{
	if(win[s11],[s12],[s13]=="O")
	{
		alert("Ganaste con O")
	}
	
}

if(win[s21],[s22],[s23]=="X")
{
	alert("ganaste! yujuuu :D lina 2")
}
else
{
	if(win[s21],[s22],[s23]=="O")
	{
		alert("Ganaste con O linea 2")
	}
	
}
}