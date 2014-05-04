(function() {
        var client = new ZeroClipboard(document.getElementById('CopyButton') );

        
      client.on( 'ready', function(event) {
        // console.log( 'movie is loaded' );

        client.on( 'copy', function(event) {
          event.clipboardData.setData('text/plain', document.getElementById('output').innerHTML);
        } );

        client.on( 'aftercopy', function(event) {
          console.log('Copied text to clipboard: ' + event.data['text/plain']);
        } );
      } );

      client.on( 'error', function(event) {
        console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
        ZeroClipboard.destroy();
      } );
})();

	// jquery stuff(optional)
	function debugstr(text){
		$("#d_debug").append($("<p>").text(text));
	};
