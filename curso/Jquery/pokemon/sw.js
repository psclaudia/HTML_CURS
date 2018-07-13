var id=1;
var i;
var x = "";
var j;
var w = "";
$().ready(function(){
	$("#prev").prop("disabled",true);
	getinfo();
	$("#next").click(function() {
		if(id +1  == 6) $("#next").prop("disabled",true);
		else $("#prev").prop("disabled",false);
		++id;
		getinfo();
	});

	$("#prev").click(function() {
		if(id- 1 == 1) $("#prev").prop("disabled",true);
		else $("#next").prop("disabled",false);
		--id;
		getinfo();
	});
	$("#search").click(function() {
		search();
	});		
});
function getinfo() {
	$.get("http://40.118.8.76/pokemons/" + id ,
		function(data){
			clear();
			$("#code").text(data.num);
			$("#normal").append("<img src="+data.images[0].front+" >");
			$("#shiny").append("<img src="+data.images[1].front_shiny+" >");
			$("#name").text(data.name);
			for(i = 0; i < data.types.length; i++) {
				x += data.types[i].type.name + "<br>";
			}
			$("#type").html(x);
			for(j in data.moves.HM) {
					w += data.moves.HM[j] + "<br>";
				}
			if(w == "") $("#hm").html("none");
			else $("#hm").html(w);
		}, "json");
}

function clear() {
	x = "";
	w = "";
	$("#code").text("");
	$("#normal").text("");
	$("#shiny").text("");
	$("#name").text("");
}

		