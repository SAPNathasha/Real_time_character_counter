$(document).ready(function(){
    var maxLength = 50;
    var textarea = document.getElementById("textarea");
    
     
     $("textarea").on("input", function(){
        var currentLength = $(this).val().length;
        var remain = maxLength - currentLength;

        $("#total-counter").text(currentLength);
        

        $("#remaining-counter").text(remain);
        
        
});
});
