(function() {
        var clip = new ZeroClipboard.Client();
        clip.setHandCursor(true);
        clip.glue('CopyButton');
        clip.addEventListener('mouseDown',function() {
            clip.setText(ZeroClipboard.$('#output').val());
            debugstr("copied!");
        });
})()

	// jquery stuff(optional)
	function debugstr(text){
		$("#d_debug").append($("<p>").text(text));
	};
