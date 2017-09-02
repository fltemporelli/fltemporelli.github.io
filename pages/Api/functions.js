var API_KEY = '6181994-aa3f56c781fed1f631803cf21';
var arrURL = []; 

/*var input = $('#search').val(); 
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');*/

$(document).ready(function() {
    $('select').material_select(); 

var input = $('#search').val(); 
var URL = "https://pixabay.com/api/?key="+API_KEY+"&per_page=20"+"&q="+encodeURIComponent(input)+"&category=all"; 

$.getJSON(URL, function(data){
    if (parseInt(data.totalHits) > 0) {
        $.each(data.hits, function(i, hit){ 
            arrURL[i] = '<div class="images"><a href='+ hit.webformatURL + ' target="_blank"><img src="' + hit.webformatURL + '"></a></div>'; 
        });
        
        console.log(arrURL); 

        var imgs = '';
        for(i=0; i<arrURL.length; i++) {
            imgs+=arrURL[i];
        }   
            $('#gallery').html(imgs);
            $('#container').slideDown(400); 
    }
    else
        console.log('No hits');
    });

}); 


$('#look').on('click', function(){

var input = $('#search').val(); 
var select = $('#category').val();

if (select) {
    select = select.toLowerCase(); 
} 

console.log(select);  
var URL = "https://pixabay.com/api/?key="+API_KEY+"&per_page=20"+"&q="+encodeURIComponent(input)+"&category="+select;  
console.log(URL); 

$.getJSON(URL, function(data){
    if (parseInt(data.totalHits) > 0) {
        $.each(data.hits, function(i, hit){ 
            arrURL[i] = '<div class="images"><a href='+ hit.webformatURL + ' target="_blank"><img src="' + hit.webformatURL + '"></a></div>'; 
    	});
    	
        console.log(arrURL); 

        var imgs = '';
        for(i=0; i<arrURL.length; i++) {
        	imgs+=arrURL[i];
        }   
            $('#container').hide(10); 
        	$('#gallery').html(imgs);
            $('#container').slideDown(400); 
    }
    else
        console.log('No hits');
	});

}); 

/*$.ajax({
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'jsonp',
        url: 'https://pixabay.com/api/',
        data: {
            method: 'getQuote',
            format: 'jsonp',
            lang: 'en',
        },
}); */
        
