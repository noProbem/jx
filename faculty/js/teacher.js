$(function(){
	$("#box").css("display","none");
	if($(window).width()<767){
		
		$container=$("#contain");
		$Oli=$container.find("li");
		$Oli.click(function(){
			if($("#box").is(":hidden")){
				$("#box").show();
				$imgSrc=$(this).find("div").children("img").attr("src");
				$Text=$(this).find("div").children("article").text();
				$("#box img").attr("src",$imgSrc);
				$("#box article").text($Text);
			}else{
				$("#box").hide();
				$("#box img").attr("src","");
			}
		})
		$("#box").click(function(){
			$(this).hide();
		})
	}
	$(window).resize(function(){
		location.reload(true);
//					window.location.reload();
	})
})