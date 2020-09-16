//header onclick
$(".hide").hide();
$(".click").toggle(function(){
	$(".hide").slideDown();
},function(){
	$(".hide").slideUp();
});

//$(document).ready(function(){
//  /*自制的小屏下拉菜单*/
//  $(".click").click(function(){
//		/*$("#show").toggleClass("none");*/
//		$(".hide").slideToggle("slow");
//	});  
//});
//campus btn
$(function(){
	$("#btn").toggle(function(){
		$(".hide").show();
		btn.innerHTML="关闭&nbsp;&nbsp×";
	},function(){
		$(".hide").hide();
		btn.innerHTML="查看更多&nbsp;&nbsp;+";
	})
	
	$("#btn_two").toggle(function(){
		$(".hide_two").show();
		btn_two.innerHTML="关闭&nbsp;&nbsp×";
	},function(){
		$(".hide_two").hide();
		btn_two.innerHTML="查看更多&nbsp;&nbsp;+";
	})
	
	$("#btn_three").toggle(function(){
		$(".hide_three").show();
		btn_three.innerHTML="关闭&nbsp;&nbsp×";
	},function(){
		$(".hide_three").hide();
		btn_three.innerHTML="查看更多&nbsp;&nbsp;+";
	})
	
	$("#btn_four").toggle(function(){
		$(".hide_four").show();
		btn_four.innerHTML="关闭&nbsp;&nbsp×";
	},function(){
		$(".hide_four").hide();
		btn_four.innerHTML="查看更多&nbsp;&nbsp;+";
	})
})
//work btn
//$(function(){
//	$("#btn_two").toggle(function(){
//		$(".hide_t").show();
//		btn.innerHTML="关闭&nbsp;&nbsp×";
//	},function(){
//		$(".hide").hide();
//		btn.innerHTML="查看更多&nbsp;&nbsp;+";
//	})
//})

function hidemenu(){
	var menu_two=document.getElementById("menu_two");
	menu_two.style.display="none";
}