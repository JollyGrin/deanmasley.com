$(window).resize(function() {
    if ($(document).width() <= 710) {    
        $("#hero").css("background-image", "url(img/bg-main-color-slim.jpg");
    } else {
    	$("#hero").css("background-image", "url(img/bg-main-color.jpg");
    }
}).resize()