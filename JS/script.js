$(document).ready(function() {
    
    function lineWidthExpand() {
        $(".main_title").animate({
            opacity: "1",
        })
        $(".lineWidth").delay("1000").animate({
           width: "10%",
           opacity: "1",
        },1000);

    }

    window.onload = lineWidthExpand();




    $(".author_1").click(show_AlanWatts_Info);

    function show_AlanWatts_Info() {
        $(".alanWatts_background").animate({
            opacity: "1",
            width: "100%",
            height: "100%",
            borderRadius: "0",
        },350, "linear")
        $(".authors").css("color", "white");
    }


})