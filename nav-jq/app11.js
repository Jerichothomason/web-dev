
$(document).ready(function() {
console.log("huray");
var position = $(window).scrollTop();
$(window).scroll(function() {
    console.log("huray in");

    var scroll = $(window).scrollTop();
    if (scroll > position) {
        $('.navbar').addClass('hide-nav');
    
console.log("down");
}
     else {
        $('.navbar').removeClass('hide-nav');
        console.log("up");
    }
    $('#navbar .collapse').removeClass('show');
    position = scroll;

});

});