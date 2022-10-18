var oldtext = ['展覽作品', '展場資訊'];

$(document).ready(function() {
    $(".sub").slideUp(0);
    var enter = false;
    $(".list").mouseenter(function(){
        count += 1;
        oldtext.forEach( data => {
            if( data == $(this).find(".main").text()){
                enter = true
                $(this).find(".sub").slideToggle(800);
            }
        });
    }).mouseleave(function(){
        oldtext.forEach( data => {
            if( data == $(this).find(".main").text()){
                
                $(this).find(".sub").slideToggle(800);
            }
        });
    })
})

