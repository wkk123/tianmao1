$(function(){
   var bb=$(".bb");
   var aa=$(".aa");

   for (var i = 0; i < bb.length; i++) {
   	  bb[i].style.display="none";
     
   };
   for (var i = 0; i < aa.length; i++) {
   	(function(n){
   		bb.onmouseover=function(){
   			aa[n].style.display="block";
   		}
   		bb.onmouseout=function(){
   			aa[n].style.display="none";
   		}


   	})()
   };
   



})