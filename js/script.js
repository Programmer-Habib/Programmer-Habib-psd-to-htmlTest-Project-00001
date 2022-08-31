// MAIN CSS START
$(document).ready(function(){
    // NAVIGATION STIKEY
    $(".js--stiky-menu").waypoint(function(direction){
        if(direction == "down"){
            $(".header-top-area").addClass("stikey");
        }else{
            $(".header-top-area").removeClass("stikey");
        };
    });

    // MIXITUP (PORTFOLIO AREA)
    var mixer = mixitup(".portfolio");

    // MAILMENU MOBILE
    $("#nav").meanmenu({
        meanMenuContainer: "#mobile-menu",
        meanScreenWidth: 810,
    });

    // IE / Edge / Safari
    $("a").on("click", function(event){
        if(this.hash !== "") {
            event.preventDefautl();

            var hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).ofset().top}, 800, function(){
                    window.location.hash = hash;
            });
        }    
    });
});

// MAIN CSS END