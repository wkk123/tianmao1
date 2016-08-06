$(function(){
	 var search=getClass("search")[0];
 var flag=true;
 var flag2=true;
  document.onscroll=function(){
	 var tops=document.body.scrollTop||document.documentElement.scrollTop;
	 //document.title=tops;
	 if (tops>=700){
		 //search.style.top=0;
		 if (flag){
			 animate(search,{top:0})
			 flag=false;
			 flag2=true;
		 }
            
	 }else{
		 //search.style.top=-60;
		 if (flag2){
			  animate(search,{top:-60});
			  flag2=false;
			 flag=true;
		 }         
	 }
  }
})