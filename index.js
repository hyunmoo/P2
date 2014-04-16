$(document).ready(function(){

	$('#num').click(function(){
		var a = Math.floor((Math.random()*10)+0);
		//document.write(a);
		document.getElementById("num").innerHTML = a;	
	});
	
	$('#btn').click(function(){
		var a = Math.floor((Math.random()*10)+0);
		document.write(a);
	});

});
