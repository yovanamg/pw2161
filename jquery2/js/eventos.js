var iniciaApp = function()
{
	var validarEntrada = function()
	{			
		//Invalida los eventos que 
		//no corresponden a esta función.	
		event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//******** Validaciones **********
		//1.- Que no sean vacíos
		if(usuario == "")
		{
			alert("El usuario no debe ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("La clave no debe ser vacía");
			$("#txtClave").focus();
		}
		//2.- Verificar usuario y contraseña
		var parametros="accion=validaEntrada"+
					   "&usuario="+usuario+
					   "&clave="+clave+
					   "&id="+Math.random(); 
		$.ajax({
			beforeSend:function(){
				console.log("Validar al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true) //¬¬
				{
					$("#datosUsuario").hide();
					$("nav").show("slow");
				}
				else
				{
					alert("Usuario/contraseña incorrecto(s)");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
		console.log("Se disparó el submit");
	}

	var Altas = function()
	{
		//Mostramos el formulario
		$("#altaUsuarios").show("slow");
		$("#altaUsuarios h2").html("Alta Usuarios");
		//Enciendo la funcion de AltaUsuario
		$("#frmAltaUsuarios").on("submit",AltaUsuario);
		//Apago la funcion de BajaUsuario para el mismo boton
		$("#frmAltaUsuarios").off("submit",BajaUsuario);
	}

	var AltaUsuario = function()
	{
		event.preventDefault();
		//alert($("#frmAltaUsuarios").serialize());
		var datos = $("#frmAltaUsuarios").serialize();
		var parametros = "accion=guardaUsuario&"+datos+
		                 "&id="+Math.random();

		$.ajax({
			beforeSend:function(){
				console.log("Guardar al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true )//¬¬
				{
					alert("Usuario registrado correctamente");
				}
				else
				{
					alert("No se pudo guardar la información");
				}
			},
			error: function(xhr,ajax,thrownError){

			}
		});
	}

	var Bajas = function()
	{
			$("#altaUsuarios").show("slow");
			$("#altaUsuarios h2").html("Baja Usuarios");
			//Apago la funcion de AltaUsuario
			$("#frmAltaUsuarios").off("submit",AltaUsuario);
			//enciendo la funcion de BajaUsuario para el mismo boton
			$("#frmAltaUsuarios").on("submit",BajaUsuario);

	}

	var BajaUsuario = function()
	 {
	 	event.preventDefault();
	 	var datos = "txtNombreUsuario="+$("#txtNombreUsuario").val();
		var parametros = "accion=bajaUsuario&"+datos+
		                 "&id="+Math.random();

		$.ajax({
			beforeSend:function(){
				console.log("Baja al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true )//¬¬
				{
					alert("Usuario Eliminado correctamente");
				}
				else
				{
					alert("No se pudo Eliminar el Usuario");
				}
			},
			error: function(xhr,ajax,thrownError){

			}
		});

	 }

	 var Consultas = function()
	 {
	 	$("#consultasUsuario").show("slow");
	 	var parametros = "accion=consultas"+
	 					"&id="+Math.random();
	 
	 $.ajax({
			beforeSend:function(){
				console.log("Consultas Usuarios");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					$("#tablaConsultas").html(response.tabla);
					//$("#tablaConsultas").append(response.tabla);
				}
			},
			error:function(xhr,ajax,thrownError){
					console.log("Ha Ocurrido un error")
			}
		});
	 }


	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#btnAltas").on("click",Altas);
	$("#frmAltaUsuarios").on("submit",AltaUsuario);
	$("#btnBajas").on("click",Bajas);
	$("#btnConsultas").on("click",Consultas)
}
$(document).on("ready",iniciaApp);