$(function(){
   var list=$(".list");
   var item=$(".item");
   //给每一个初始化一个none
   for (var i = 0; i < list.length; i++) {
       item[i].style.display='none';
   };
   //先循环后，再给执行事件，当鼠标移入移出时执行事件
   for (var i = 0; i < item.length; i++) {
      (function(n){
             list[n].onmouseover=function(){
                item[n].style.display="block";
             }
             list[n].onmouseout=function(){
                item[n].style.display="none";
             }
        })(i)
  };



})