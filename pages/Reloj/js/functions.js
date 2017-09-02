
$(document).ready(function() {

	$(".horas").rotate({angle:45}); 
	setInterval(actualizarReloj, 30); 
}); 

function actualizarReloj() {
	var date = new Date(); 
	var hora = date.getHours();
	var minutos = date.getMinutes();
	var segundos = date.getSeconds();

	rotateHandle(".horas", 360/12*hora);  
	rotateHandle(".minutos", 360/60*minutos); 
	rotateHandle(".segundos", 360/60*segundos); 
} 

function rotateHandle(handle, angle) {

	$(handle).rotate({angle: angle}); 
}