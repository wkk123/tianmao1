$(function(){
 var imgbox=$(".two")[0];
 var as=$("a",imgbox);
 var point=$(".point")[0];
 var lis=$("li",point);
 var banner=$(".banner")[0];
 var num=0;
   as[0].style.zIndex=10;
   lis[0].className="hot";
  
 var aa=["#FF6100","#E7E7E7","#2AC8ED","#E8E8E8","#EE452E","#E8E8E8","#006DDC"]; 
 var t=setInterval(moreR,2000);
 function moreR(){ 
 
 	num++;
 	if (num==as.length) {
 		num=0;
 	};
 	for (var i = 0; i < as.length; i++) {
 	as[i].style.zIndex=5;
 	lis[i].className="";	
    };
    lis[num].className="hot";
    as[num].style.zIndex=10;
    banner.style.background=aa[num];

 }
 imgbox.onmouseover=function(){
 	clearInterval(t);
 }
 imgbox.onmouseout=function(){
 	t=setInterval(moreR,1000);
 }
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function(){
		for (var j = 0; j < as.length; j++) {
		as[j].style.zIndex=5;//初始化，使所有图片在一个层级上
		lis[j].className="";//初始状态
	};
		lis[this.index].className="hot";
		as[this.index].style.zIndex=10;
		banner.style.background=aa[this.index];

		num=this.index;
	}
};

/*********换一批***********************************/
var huanyipi=$(".huanyipi")[0];
var aimg=$("a",huanyipi)[0];

function zhuan(){
	huanyipi.onmouseover=function(){
		animate(aimg,1000,Tween.Circular)
	}
	huanyipi.onmouseout=function(){
		animate(aimg,1000,Tween.Circular)
	}
}

})