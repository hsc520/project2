
	$(document).ready(function(){
		var liWidthL= $(".partner li").outerWidth(true);
		var liLenL = $(".partner li").length;
		var bool = true;
		var luno;
		for(var i=0;i<liLenL;i++){
			$(".partner li").eq(i).css({"left":i*liWidthL+"px"})
		}
		$(".next").click(function(){
			show();
		})
		$(".prev").click(function(){
			if(bool){
				bool = false;
				if(liLenL>4){
					for(var i=0;i<liLenL-1;i++){
						$(".partner li").eq(i).animate({"left":(i+1)*liWidthL+"px"},500);
					}
					$(".partner li").eq(liLenL-1).prependTo(".partner ul").css({"left":-liWidthL+"px"}).animate({"left":0},500,function(){
						
						bool = true;
					});
				}
			}
		})
		$(".partner ul>li").mouseover(function(){
			clearInterval(lunbo);
		})
		$(".partner ul>li").mouseout(function(){
			lunbo = setInterval(function(){
				show();
			},2000)
		})
		function show(){
			if(bool){
				bool = false;
				if(liLenL>4){
					$(".partner li").eq(0).animate({"left":-liWidthL+"px"},500,function(){
						$(".partner li").eq(0).appendTo(".partner ul").css({"left":(liLenL-1)*liWidthL+"px"});
						bool = true;
					})
					for(var i=1;i<liLenL;i++){
						$(".partner li").eq(i).animate({"left":(i-1)*liWidthL+"px"},500);
					}
				}
			}
		}
		lunbo = setInterval(function(){
			show();
		},2000)
})	