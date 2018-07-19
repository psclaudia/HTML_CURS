var numserie = "0";
var num = 0;

$(document).ready(function() {
	$(".description").css("display","none");

	setInterval(carrusel,3000);
 	
 	function carrusel() {
 		$(".series img").removeClass("opaque");
 		if (num == 9) num = 0;
 		else ++num;
 		numserie = num.toString();
 		$(".series img").eq(numserie).addClass("opaque");
	    $("#controls span").removeClass("selected");
	    $(this).addClass("selected");
 	}

 	$("#controls").on('click', 'span', function() {
	   	$(".series img").removeClass("opaque");
	    var newImage = $(this).index();
	    console.log(newImage);
	    $(".series img").eq(newImage).addClass("opaque");
	    $("#controls span").removeClass("selected");
	    $(this).addClass("selected");
	    var aux = $(this).attr("id");
	    numserie = aux.charAt(aux.length-1);
    }),
    /*funcion popup*/
    "use strict";
    $(".series").click(function () {
        $(".series").fadeOut();
        $("#controls").fadeOut();
        $(".show").fadeIn();
        console.log(numserie);
        $(".seriedescripcion"+numserie).show();
        console.log(numserie);
    }),
    
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
         $(".series").fadeIn();
        $("#controls").fadeIn();
    }),

    $("#controls span").click(function () {
    	var id = $(this).attr('id');
    	console.log(id);
    	numserie =id.charAt(id.length-1);
    	console.log(numserie);
    	$(".description").css("display","none");
    	$(".seriedescripcion" + numserie).css("display","block");
    });



  });
