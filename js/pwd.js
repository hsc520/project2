  var focusVlaue = function(obj,value){
      if(obj.value == value){
        obj.value = ""
      }
    }
    var blurValue = function(obj,value){
      if(obj.value == ""){
        obj.value = value;
      }
    }