$("#userText").keyup(function (e) {
    autoheight(this);
});

function autoheight(a) {
    if (!$(a).prop('scrollTop')) {
        do {
            var b = $(a).prop('scrollHeight');
            var h = $(a).height();
            $(a).height(h - 5);
        }
        while (b && (b != $(a).prop('scrollHeight')));
    };
    $(a).height($(a).prop('scrollHeight') + 20);
}

autoheight($("#ta"));

function myFunction()
{
	var FullSpace = '　';
	var userText = document.getElementById("userText").value;

	var messages = userText.split('\n');

	console.log("messages: "+messages);

	var maxLength = Math.max.apply(Math, $.map(messages, function (el) { return el.length }));

	var result = Array.apply(null,new Array(maxLength)).map(String.prototype.valueOf,"")

	var row = 0;

	for (var inputRow = messages.length - 1; inputRow >= -1; inputRow--) 
	{
		for (var inputColumn = 0; inputColumn < maxLength; inputColumn++) 
		{
			if(inputRow == -1)
			{
				result[row++] += "\n"
			}
			else if (inputColumn < messages[inputRow ].length) 
			{
				var code = messages[inputRow].charCodeAt(inputColumn);
				if(code>=33&&code<=126)
				{
					result[row++] += String.fromCharCode(code+65248);
				}
				else
				{
					result[row++] += messages[inputRow][inputColumn];
				}
			}
			else
			{
				result[row++] += FullSpace;
			};
		};

		row = 0;
	};

	console.log(result);
	var outputText = "";

	for (var i = 0; i < result.length; i++) {
		outputText += result[i];
	};
	console.log(outputText);

document.getElementById("output").innerHTML = outputText;
}
