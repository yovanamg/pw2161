//jquery(etiquetas,clases,a¡id)
//$ alias (un sobre nombre)
//$ == jquery
var inicio = function()
{
	var clicBoton = function()
	{
		console.log("Clic del botón");
		$(".anuncioWeb").html("Clic del botón");
		$(".anuncioWeb").append("Clic del botón");
	}
	//preparar los eventos de todos mis objetos
	$("#miBoton").on("click",clicBoton);
}
//main
$(document).on("ready",inicio);
