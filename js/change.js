      $(function(){
        var lis = $(".info>ul>li:gt(0)");
        lis.each(function(i){
          $(this).mouseover(function(){
             lis.eq(i).css("background","url('./images/yellow_03.jpg')");
            
          })
          $(this).mouseout(function(){
             lis.eq(i).css("background","url('./images/blue_03.jpg')");
          })

        })
       })