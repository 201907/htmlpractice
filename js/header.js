$(function(){
	$("#nav_menu>ul>li.haschild").hover(
		function(e){
			$(this).find(".child").slideToggle(350);
		},
		function(){
			$(this).find(".child").slideToggle(350);

		}
)
	$("#nav_menu>ul>li").hover(
		function(){
			$(this).css({'color':'#fff','background':'linear-gradient(to bottom,#77bcd7 0%,#3b94b9 100%)'});
			$(this).children("a").css("color","#fff");
		},
		function(){
			$(this).css({'color':'#fff','background':'linear-gradient(to bottom,#e5e5e3 0%,#d1d0cb 100%)'});
			$(this).find("a").css("color","#6c6c6c");		
		}
	)
})