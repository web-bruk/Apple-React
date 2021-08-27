$(document).ready(function(){
    if($(window).width()< 768){
    $(".footer-links-wrapper").addClass("saterdayclass");
}else {
    $(".footer-links-wrapper").removeClass("saterdayclass");
}

    $(window).on("resize",function (){
        if($(window).width()< 768){
            $(".footer-links-wrapper").addClass("saterdayclass");
            //$(".footer_links_wrapper li").hide();
        }else {
            $(".footer-links-wrapper").removeClass("saterdayclass");
            $(".footer-links-wrapper ul").show();
            // $(".footer_links_wrapper li").show();
        }
        }
    )
    $(document).on("click", ".saterdayclass h3",
    function (){
       // $( ".saterdayclass h3").css("backgroundColor","pink");
        $(this).next("ul").slideToggle();
        $(this).toggleClass("iconRotator");
    })
})
