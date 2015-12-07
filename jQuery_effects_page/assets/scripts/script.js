$(document).ready(function(){
	 
	  $(".container").append("<header></header>");
    $("header").css({
        "width": "100%",
        "height": "50px",
        "background-color": "rgba(80, 69, 69, 0.26)",
        "margin": "auto auto",
        "text-align": "center",
        "border-bottom": "2px solid rgba(80, 69, 69, 0.37)",
        "position":"fixed"
    });
	
    $("header").hide();
    $("div.container").hover(function(){
        $("header").fadeIn("slow");
    },function(){
        $("header").fadeOut(500);
    });

    $("header").append("<ul></ul>");  
	  $("ul").append("<li>Home</li>");
	  $("ul").append("<li>Menu</li>");
	  $("ul").append("<li>Offer</li>");
	  $("ul").append("<li>Order</li>");
	  $("ul").append("<li>Contact</li>");
	  $("li").addClass("list");
 
    $("li").hover(function(){
 	    $(this).animate({
        "font-size":"+=3px",
      });
 	    $(this).css({
	   	  "background-color" : " #fff",
   	   "color" : "#009900" 
  	  });
    },function(){
     	$(this).animate({"font-size":"-=3px",
        });
      $(this).css({
      	"background-color" : "#009900",
       	"color" : "#fff" 
     	});
    });
   
    $(".container").append("<div class='main'> </div>");
    $(".main").addClass("bg_main");
    $(".container").append("<div class='home'> </div>");
    $(".home").append("<p> This is the home page of the restaurant</p>");
    $(".home").addClass("bg_home");
    $(".home").addClass("para");
    $(".home").hide();
    $(".container").append("<div class='menu'> </div>");
    $(".menu").append("<p> This is the menu page of the restaurant</p>");
    $(".menu").addClass("bg_menu");
    $(".menu").addClass("para");
    $(".menu").hide();
    $(".container").append("<div class='order'> </div>");
    $(".order").append("<p>This is the home order page</p>");
    $(".order").addClass("bg_order");
    $(".order").addClass("para");
    $(".order").hide();
    $(".container").append("<div class='offer'> </div>");
    $(".offer").append("<p>This is the offers page</p>");
    $(".offer").addClass("bg_offer");
    $(".offer").addClass("para");
    $(".offer").hide();
    $(".container").append("<div class='contact'> </div>");
    $(".contact").append("<p>Please contact us</p>");
    $(".contact").addClass("bg_contact");
    $(".contact").addClass("para");
    $(".contact").hide();

    $("li").eq(0).on('click',function(){
    	$(".home").fadeIn();
    	$(".menu").hide();
    	$(".main").hide();
    	$(".order").hide();
   	  $(".offer").hide();
   	  $(".contact").hide();
    });

    $("li").eq(1).on('click',function(){
    	$(".main").hide();
     	$(".home").hide();
     	$(".menu").fadeIn();
     	$(".order").hide();
     	$(".offer").hide();
     	$(".contact").hide();
    });
    
    $("li").eq(2).on('click',function(){
    	$(".main").hide();
     	$(".home").hide();
     	$(".menu").hide();
     	$(".order").hide();
     	$(".offer").fadeIn();
     	$(".contact").hide();
    });
    
    $("li").eq(3).on('click',function(){
    	$(".main").hide();
     	$(".home").hide();
     	$(".menu").hide();
     	$(".order").fadeIn();
     	$(".offer").hide();
     	$(".contact").hide();
    });

   $("li").eq(4).on('click',function(){
    	$(".main").hide();
     	$(".home").hide();
     	$(".menu").hide();
     	$(".order").hide();
     	$(".offer").hide();
     	$(".contact").fadeIn();
    });
});
