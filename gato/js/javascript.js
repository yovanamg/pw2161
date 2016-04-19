var bandera = true;

function clic()
{
	if(bandera==true)
	{
		document.getElementById("n11").value="x";
		bandera = false;
	}
	else
	{
		document.getElementById("n11").value="o";
	}
	if(bandera==true)
	{
		document.getElementById("n12").value="x";
		bandera = false;
	}
	else
	{
		document.getElementById("n12").value="o";
	}


}