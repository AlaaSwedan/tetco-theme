
jQuery(document).ready(function() {
	
    /*
        Background slideshow
    */
    $('.testimonials-container').backstretch("assets/img/backgrounds/1.jpg");
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });
    
	$(".nav a").click(function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

});
// 
// $(".nav a").on("click", function(){
//    $(".nav").find(".active").removeClass("active");
//    $(this).parent().addClass("active");
// });
