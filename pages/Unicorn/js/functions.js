$(document).ready(function() { 
    


    $('select').material_select();


    reset (); 

    dropDown(); 

    closeDropdown(); 

    /* input range filling efect */ 	

	$('input[type="range"]').on("input change", function () {
	    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
	    var val2 = val*228; 

	    $('.line').css('width', val2); 
	});	

	var checkbox = $('input[type="checkbox"]'); 

	$(checkbox).on("click", function () { 

		if(checkbox.attr("value") == "on") {

			checkbox.attr("value", "off"); 

		}

		else {

			checkbox.attr("value", "on");
		
		}

	}); 

	$('#mail').on("focusout", function() {

		if($('#mail').hasClass('invalid')) {

			$('div.icon').show(); 
 
		} 

		else {
			$('div.icon').slideUp(); 
		}

	}); 

});
   

/* Functions */ 		

function formValidation () {
		var gender = document.getElementById('gender').value;  
		var furColor = document.getElementById('color').value; 
		var unicornName = document.getElementById('unicornName').value; 
		var checkedValue = 	document.getElementById('checkbox').value; 

		if(gender == '') {
			$('div.show p').show();
		}

		if(furColor == '') {
			$('div.error3 p').show();
		} 

		if(unicornName == '') {
			$('div.errors p').show(); 
		}

		if(checkedValue == 'on') {
			$('.row .checked p').show(); 
		}

		if($('#mail').val() == '') {
			$('#emptyMail').show(); 
		}

}

function reset () {
		$('#unicornName').on('focus', function() {
			$('div.errors p').slideUp(); 
		}); 

		$('#checkbox').on('click', function () {
			$('.row .checked p').slideUp(); 
		}); 

		$('#gender').on('change', function () {
			$('div.show p').slideUp();
			$('#genderSelect').show(); 
			$('.selectorOne input[type=text].select-dropdown').css('color', '#151515'); 
		}); 


		$('#color').on('change', function () {
			$('div.error3 p').slideUp();
			$('#furSelect').show();
			$('.selectorTwo input[type=text].select-dropdown').css('color', '#151515');  
		}); 

		$('#mail').on('focus', function() {
			$('#emptyMail').slideUp(); 
		}); 
}

function dropDown() {

		$('#nav').on('click', function () {
				$('#menu-dropdown').toggle(400); 
		}); 

}

function closeDropdown() {
		$('#nav').on('focusout', function () {
				$('#menu-dropdown').hide(400); 
		}); 

}
