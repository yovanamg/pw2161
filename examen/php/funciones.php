<?php 

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

function borraAlmacen()
{
	$respuesta = false;
	$idAlmacen = GetSQLValueString($_POST["txtIdAlmacen"],"long");
	mysql_connect("localhost","root","");
	mysql_select_db("examen");
	$baja = sprintf("delete from almacenes where idAlmacen=%d limit 1",$idAlmacen);
	mysql_query($baja);
	if(mysql_affected_rows() > 0)
	{
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}

$accion = $_POST["accion"];

switch ($accion) {
	case 'borraAlmacen':
		borraAlmacen();
		break;
	default:
		# code...
		break;
}

 ?>