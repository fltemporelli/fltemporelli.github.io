var sliderUL =  $("#sliderImgs li");
var currentLI = sliderUL.first();
var i = 0;
var slideInitialized = false;

$(document).ready(function() { 
	//empieza con las li ocultas (excepto la 1ra)
	sliderUL.each(function() {
		if($(this).index()>0)
		{
			$(this).hide();
		}
	});
	
	currentLI.mouseover(function() {
		if(!slideInitialized)
		{
			slideInitialized = true;
			slide();
			setInterval(slide, 3000);
		}
	});
});

function slide() {
	$(currentLI).fadeOut('slow', function() {
		
		if(i < sliderUL.length-1)
		{
			i++;
		}
		else {
			i=0;
		}
		currentLI = sliderUL[i];
		$(currentLI).fadeIn('slow', function (){
		});
	});
}
 
