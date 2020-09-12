
$(document).ready(function() {
    console.log("huray");
    var position = $(window).scrollTop();
    $(window).scroll(function() {
        console.log("huray in");
    
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            $('.navbar').addClass('away');
        
    console.log("down jerry");
    }
         else {
            $('.navbar').removeClass('away');
            console.log("up jerry");
        }
        $('#navbar .collapse').removeClass('show');
        position = scroll;
    
    });
    
    });