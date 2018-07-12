$().ready(function(){
	$.get("https://swapi.co/api/people/1/?format=json",
		function(data){
			$("#name").text(data.name);
			$("#eye").text(data.films[1]);
		}, "json")	
		.always(function() {
			alert($("#name").text());
		});
});