<?php

//funciones
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}

function ValidarEntrada()
{
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	$clave = GetSQLValueString (md5($_POST["clave"]),"text");
	$respuesta = false;

	//conexion al servidor de BD
	//servidor, usuario, contraseña
	$conexion = mysql_connect("localhost","root","");
	//selecion de la BD
	mysql_select_db("cursopw");
	$validar = sprintf("select usuario,clave from usuarios where usuario=%s and clave=%s limit 1",$usuario,$clave);
	$resultado = mysql_query($validar);
	//preguntamos si se trajo un registro
	if(mysql_num_rows($resultado) > 0)
		$respuesta = true;
	$salidaJSON = array('respuesta' => $respuesta);
	//devolvemos el resultado al JS
	print json_encode($salidaJSON);
}

$accion = $_POST["accion"];

//Menu principal
switch ($accion) {
	case 'validarEntrada':
		validarEntrada();
		break;
	
	default:
		# code...
		break;
}


?>

