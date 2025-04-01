$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    var overlay = $('.overlay');
    var isExpanded = false;

    btn_open.on("click", function() {
        if(!envelope.hasClass('open')) {
            envelope.addClass('open').removeClass('close');
        }
    });

    btn_reset.on("click", function() {
        if(envelope.hasClass('expanded')) {
            returnLetter();
        } else {
            envelope.removeClass('open').addClass('close');
        }
    });


    envelope.on("click", function() {
        if(envelope.hasClass('open') && !envelope.hasClass('expanded') && !isExpanded) {
            envelope.addClass('expanded');
            overlay.fadeIn(300);
            isExpanded = true;
        } else if(envelope.hasClass('expanded') && isExpanded) {
            returnLetter();
        }
    });


    overlay.on("click", returnLetter);

    function returnLetter() {
        envelope.addClass('returning');
        
        setTimeout(function() {
            envelope.removeClass('expanded returning');
            overlay.fadeOut(300);
            isExpanded = false;
        }, 800); 
    }
});
