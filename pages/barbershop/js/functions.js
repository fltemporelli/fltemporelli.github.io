var options = ['Barba', 'Corte', 'Peinado'];
var errores = []; 
var error = document.getElementById('error'); 
var nombre = document.getElementById('nombre'); 
var ap = document.getElementById('ap'); 
var campo = document.getElementById('campo');


$(document).ready(function() {

	var select = $('#sel'); 

	for (i=0; i<options.length; i++) {
		value= i + 1; 
		var option = '<option value="'+ value + '">' + options[i] + '</options>'; 
		select.append(option); 
	} 

$('.img_peque').on('click', function() { 
	imagen=$(this).data('img');  
	console.log(imagen); 
	$('#grande').attr('src', imagen); 
});

$('.menu').on('click', function(e) {
	e.preventDefault(); 
	link=$(this).attr('href'); 
	$('html, body').animate({
		scrollTop:$(link).offset().top 
		 
	}, 2000); 

}); //fin event menu

$('.primera').on('mouseenter', function() {
		url=$(this).data('img');
		url_actual=$('#segunda').attr('src'); 
		console.log(url); 
		$('#segunda').fadeTo("ease", 0.2, function(){	
			$('#segunda').attr('src', url);
			$('#segunda').fadeTo("ease", 1, function() {
			});
	}); //fin fade to. 
		$('#segunda').on('mouseleave', function() {
				$('#segunda').attr('src', url_actual); 
		}); // fin mouseleave 
}); //fin mouseenter.


$('#submit').click(function (e) {
		e.preventDefault(); 
		console.log("asdasasda"); 
		validarFormulario(form);
});   // fin valir form 

/*$('.primera').on('mouseleave', function() {
		$('#segunda').fadeOut ("slow", function () {
			url=$(this).data('url');
			console.log(url); 
			$('#segunda').attr('src', url);
		}); 

		$('#segunda').fadeIn(3000, function() {

		}); 
}); */

}); //fin document ready



	
	// para submitear en jquery: $("#form").submit();

function soloLetras(x) {
	   	var expr = /^[a-zA-Z]*$/;

	   	if (expr.test(x)) {
	   		return true; 
	   	}
	   	return false; 
	}

function validarNombre(x) { 


		if(x.value == '' || x.value == null) {
			 errores.push('<li>Por favor complete el nombre</li>'); 
			 console.log('null'); 
			 
	}

		else { 
			if (!soloLetras(x.value)) { 

				errores.push('<li>Solo puede ingresar letras en el nombre</li>'); 
				console.log('solo letras'); 
				

			} else { 
				console.log('todo bien');  
				return true;

			}

		}

}

function validarApellido(x) { 


		if(x.value == '' || x.value == null) {
			 errores.push('<li>Por favor complete el apellido</li>'); 
			 console.log('null'); 
			 
	}

		else { 
			if (!soloLetras(x.value)) { 

				errores.push('<li>Solo puede ingresar letras en el apellido</li>'); 
				console.log('solo letras'); 
				

			} else { 
				console.log('todo bien');  
				return true;

			}

		}

}


	function validarCampo(x) { 

			if (!soloLetras(x.value)) { 

				errores.push('<li>Solo puede ingresar letras en el campo</li>');
				console.log(errores); 

			} 
			
			else 

	{
				console.log('todo bien');
				return true; 

	}

}

	function validarFormulario(x) {
		
		validarNombre(nombre); 
		validarApellido(ap); 
		validarCampo(campo); 

		if (errores.length==0) 
				{ 
					var datos= $('#form').serialize();  
					console.log(datos);

				} else {
					error.style.display = 'block';
					for (i=0; i<errores.length; i++) 
						error.innerHTML += errores[i]; 
				    }

	} // fin validarForm

