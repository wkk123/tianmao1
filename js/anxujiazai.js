$(function(){
	var floor=$(".floor");   //获取楼层的集合
	var arr=[];             //定义一个空的数组
	for (var i = 0; i < floor.length; i++) {
	  var fh=floor[i].offsetTop;//获取楼层的高度
	   arr.push(fh)  
	};
	/*按需加载*/
	var ch=document.documentElement.clientHeight;//获取可视窗口对的高度
	window.onscroll=function(){
		var obj=document.body?document.body:document.documentElement;//三元运算，选择浏览器
		var scrolltop=obj.scrollTop;          //获取滚动条滚动的距离

		for (var i = 0; i < floor.length; i++) {
			if (scrolltop+ch>=arr[i]+150) {
				var imgs=$("img",floor[i])
				for (var j = 0; j < imgs.length; j++) {
					imgs[j].src=imgs[j].getAttribute("aa");
				};
			};
		};


}
})