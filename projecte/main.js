var int;
window.onload = function() {
	/*function start();*/
	int = setInterval(imagen, 1000);
	 /*document.getElementById("izq").onclick = function() {
	 	clearInterval(int);
	 	izquierda();
	 	int = setInterval(imagen,2000);
	 }*/
}
var contador = 1;
function imagen() {
	if (contador == 1) {
		document.getElementById("fotos").style.backgroundImage = "url('media/got.jpg')";
	}
	else if(contador == 2) {
		document.getElementById("fotos").style.backgroundImage = "url('media/criada.png')";
	}
	else if(contador == 3) {
		document.getElementById("fotos").style.backgroundImage = "url('media/westworld.jpg')";
	}
	else if(contador == 4) {
		document.getElementById("fotos").style.backgroundImage = "url('media/reasons.jpg')";
	}
	else if(contador == 5) {
		document.getElementById("fotos").style.backgroundImage = "url('media/suits.jpg')";
	}
	else if(contador == 6) {
		document.getElementById("fotos").style.backgroundImage = "url('media/vikingos.jpg')";
	}
	else if(contador == 7) {
		document.getElementById("fotos").style.backgroundImage = "url('media/blackmirror.jpg')";
	}
	else if(contador == 8) {
		document.getElementById("fotos").style.backgroundImage = "url('media/breakingbad.jpg')";
	}
	else if(contador == 9) {
		document.getElementById("fotos").style.backgroundImage = "url('media/orange.jpg')";
	}
	else if(contador == 10) {
		document.getElementById("fotos").style.backgroundImage = "url('media/blacklist.jpg')";
	}
	else if(contador == 11) {
		document.getElementById("fotos").style.backgroundImage = "url('media/outlander.jpg')";
	}
	else if(contador == 12) {
		document.getElementById("fotos").style.backgroundImage = "url('media/bones.jpg')";
	}
	else if(contador == 13) {
		document.getElementById("fotos").style.backgroundImage = "url('media/sherlock.jpg')";
		contador = 0;
	}
	++contador;
}