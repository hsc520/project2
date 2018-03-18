$(function(){
			//点击小图切换大图
			$("#my_ul>li img").each(function(){
				$(this).click(function(){
					$("#curImg").attr("src",$(this).attr("src"));
				})
			})
			})