//Carousel controls
$(function() {

    //set cycle interval to 2 seconds
    $(".carousel").carousel( { interval: 2000 } );

    //Toggle play/pause on main carousel
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

});