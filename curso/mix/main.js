var int;
var color = "red";
var h = 0;
var m = 0;
var s = 0;

window.onload = function() {
	/*function start();*/
	setInterval(imagen, 3500);
	setInterval(clock, 1000);
	document.getElementById("nombre").oninput = function() {
		var x = document.getElementById("nombre").value; 
		document.getElementById("res").innerHTML = " HOLA " + x;
	}
}
	
function imagen() {
	if (color == "green") {
		color = "red";
		document.getElementById("pict").style.backgroundImage  = "url('red.png')";
	}
	else if(color == "red") {
		color = "blue";
		document.getElementById("pict").style.backgroundImage  = "url('blue.png')";
	}
	else if(color == "blue") {
		color = "green";
		document.getElementById("pict").style.backgroundImage  = "url('green.png')";
	}
}

function clock() {
	++s;
	if (s == 59) {
		s = 0; 
		++m;
		if (m >= 59) {
			m = 0; 
			++h;
		}
		if (h >= 23) {
			h = 0;
		}
	}	
	if (s < 10) document.getElementById("seconds").innerHTML = "0" + s;
	else document.getElementById("seconds").innerHTML = s;
	if (m < 10) document.getElementById("minutes").innerHTML = "0" + m;
	else document.getElementById("minutes").innerHTML = m;
	if (h < 10) document.getElementById("hours").innerHTML = "0" + h;
	else document.getElementById("hours").innerHTML = h;
}