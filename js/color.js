      $(function(){
        $(".news>ul>li").each(function(i){
          $(this).mouseover(function(){
            $(".right_con>h3>a").eq(i).css("color","#acce3f");
            $(".left_con").eq(i).css("background","#acce3f");
            $(".left_con>span").eq(i).css("background","#ffffff");
          })
          $(this).mouseout(function(){
            $(".right_con>h3>a").css("color","#01a1ff");
            $(".left_con").eq(i).css("background","#01a1ff");
            $(".left_con>span").eq(i).css("background","#afd03f");
          })

        })
       })