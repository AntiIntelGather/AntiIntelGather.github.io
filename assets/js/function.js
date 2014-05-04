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
var userText = document.getElementById("userText").value;
var lineLength = document.getElementById("lineLength").value;

if(userText.length%lineLength!=0)
{
	var spaceNum = lineLength-((userText.length)%lineLength);

	for (var i=0;i<spaceNum;i++)
	{
		userText+=String.fromCharCode(32);
	}
}

var temp = 0;
var textTemp = "";

for(var i=0;i<userText.length;i++)
{
	console.info(userText.charCodeAt(i)+":"+userText[i]);
	if(userText.charCodeAt(i)==32)
	{
		temp=12288;
	}
	else if(userText.charCodeAt(i)>=33&&userText.charCodeAt(i)<=126)
	{
		temp=userText.charCodeAt(i)+65248;
	}
	else
	{
		temp=userText.charCodeAt(i);
	}
	textTemp+=String.fromCharCode(temp);

}

var lines = textTemp.length/lineLength;
var TP1 = new Array(lines);
for(var i=0;i<lines;i++)
{
	TP1[i] = new Array(lineLength);
}
var TP2 = new Array(lines);
for(var i=0;i<lines;i++)
{
	TP2[i] = new Array(lineLength);
}

var TP1count=0;
for(var i=0;i<lines;i++)
{
	for(var j=0;j<lineLength;j++)
	{
		TP1[i][j]=textTemp.charAt(TP1count);
		TP1count++;
	}
}

var x = "";

for(var i=0;i<lineLength;i++)
{
	for(var j=lines-1;j>=0;j--)
	{
		x = x.concat(TP1[j][i]);
		x += String.fromCharCode(32);
	}
	x = x.concat('\n');
}

document.getElementById("output").innerHTML = x;
}

function myFunction1()
{
	var FullSpace = '　';
	var userText = document.getElementById("userText").value;

	var messages = userText.split('\n');

	console.log("messages: "+messages);

	var maxLength = Math.max.apply(Math, $.map(messages, function (el) { return el.length }));

	var result = Array.apply(null,new Array(maxLength)).map(String.prototype.valueOf,"") //new Array(maxLength);

	//console.log("maxLength: "+maxLength);
	//console.log("result: "+result);

	var row = 0;

	for (var inputRow = messages.length - 1; inputRow >= -1; inputRow--) 
	{
		//console.log("inputRow: "+inputRow);
		for (var inputColumn = 0; inputColumn < maxLength; inputColumn++) 
		{
			//console.log("inputColumn: "+inputColumn);
			//console.log("messages[inputRow].Length: "+messages[inputRow].Length);
			if(inputRow == -1)
			{
				result[row++] += "\n"
			}
			else if (inputColumn < messages[inputRow ].length) 
			{
				//console.log("messages["+inputRow+"]["+inputColumn+"]: "+messages[inputRow][inputColumn]);
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
