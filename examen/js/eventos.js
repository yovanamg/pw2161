var iniciaApp = function()
{

var Bajas = function()
{
	$("#artBajas").show("slow");
}

var BajaAlmacen = function()
	{
		event.preventDefault();
		var datos = "txtIdAlmacen="+$("#txtIdAlmacen").val();
		var parametros = "accion=borraAlmacen&"+datos+
		                 "&id="+Math.random();
		$.ajax({
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					alert("Baja Correcto");
				}
				else
				{
					alert("No se pudo dar de Baja");
				}
			},
			error: function(xhr,ajax,thrownError){

			}
		});
	}


$("#btnBajas").on("click",Bajas);
$("#frmBajaAlmacen").on("submit",BajaAlmacen);

}
$(document).on("ready",iniciaApp);