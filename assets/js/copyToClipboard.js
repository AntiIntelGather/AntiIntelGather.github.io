(function(){

	/* 全局设置方法
	ZeroClipboard.setDefaults({
		moviePath:"javascripts/ZeroClipboard.swf"
	});
	
	var clip=new ZeroClipboard(document.getElementById("CopyButton"));
	或者
	var clip=new ZeroClipboard();
	clip.glue(document.getElementById("CopyButton"));
	*/

	var clip=new ZeroClipboard($("CopyButton"),{
		moviePath:"./assets/js/ZeroClipboard.swf"
	});

	clip.glue('CopyButton');
	
	clip.on('ready',function(client){
		debugstr("Flash 文件已经载入");
	});
	
	clip.on('noFlash',function(client,args){
		$(".demo-area").hide();
		debugstr("您的浏览器没有使用 Flash");
	});
	
	clip.on('wrongFlash',function(client,args){
		$(".demo-area").hide();
		debugstr("Flash 版本需要 10.0.0+，当前 Flash 版本为 " + args.flashVersion.replace(/,/g,"."));
	});

	clip.on('complete',function(client,args){
		debugstr("已复制到剪贴板内容为：" + args.text);
	});

	// jquery stuff(optional)
	function debugstr(text){
		$("#d_debug").append($("<p>").text(text));
	};

})();