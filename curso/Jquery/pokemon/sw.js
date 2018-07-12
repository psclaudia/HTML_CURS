$().ready(function(){
	var id=1;
	$.get("40.118.8.76/pokemons/" + id ,
		function(data){
			$("#code").text(data.name);
			$("#normal").text(data.films[1]);
			$("#shiny").text(data.films[1]);
			
		}, "json")	
		.always(function() {
			alert($("#name").text());
		});
});