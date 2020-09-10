$(document).ready(function(){
    $('#submission').submit(function(event){
        var display1 = $('input:first').val();
        var display2 = $('input#mail').val();
        if(display1 && display2 != ''){
            
            alert ('Thank you ' + display1 + ' your message has been received');
        }else {
            alert ('Please enter your email address and name for documentation Thank you');
        }
        event.preventDefault();
    })
});