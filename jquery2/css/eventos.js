var iniciaApp = function()
{
	var ValidarEntrada = function()
	{
		//invalida los eventos que 
		//no corresponden a esta funcion
		event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		//validaciones
		//1. que no sean vacíos
		if(usuario =="")
		{
			alert("El usuario no debe ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave =="")
		{
			alert("La clave no debe ser vacío");
			$("#txtClave").focus();
		}
		//2.- Verificar usuario y contraseña
		if(usuario=="PW" && clave=="1234")
			{
				alert("Bienvenido"+usuario);
				//dar entrada al usuario
				$("#datosUsuario").hide(); //escondemos
				$("nav").show("slow"); //mostramos
			}
			else
				alert("Usuario y/o Contraseña Incorrecta(s)");
		
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",ValidarEntrada);
}
$(document).on("ready",iniciaApp);