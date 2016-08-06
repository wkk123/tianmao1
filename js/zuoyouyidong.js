$(function(){
	var uls=$(".one");//获取的是集合
	 var imgbox=$(".one1");
    for (var i = 0; i < uls.length; i++) {
        uls[i].index=i;
    	uls[i].onmouseover=function(){
    		animate(imgbox[this.index],{left:78},300)
    	}
    	uls[i].onmouseout=function(){
    		animate(imgbox[this.index],{left:88},300)
    	}
    };


	var uls=$(".one2");//获取的是集合
	 var imgbox1=$(".one3");
    for (var i = 0; i < uls.length; i++) {
        uls[i].index=i;
    	uls[i].onmouseover=function(){
    		animate(imgbox1[this.index],{left:136},300)
    	}
    	uls[i].onmouseout=function(){
    		animate(imgbox1[this.index],{left:146},300)
    	}
    };





})

	   
	    
    
