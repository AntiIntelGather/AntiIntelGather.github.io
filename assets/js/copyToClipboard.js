(function() {
        var clip = new ZeroClipboard($("CopyButton"));
        clip.on("copy",function() {
            clip.setText(ZeroClipboard.$('#output').val());
            debugstr("copied!");
        });
})();

	// jquery stuff(optional)
	function debugstr(text){
		$("#d_debug").append($("<p>").text(text));
	};
