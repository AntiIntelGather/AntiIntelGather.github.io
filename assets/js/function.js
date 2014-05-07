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

function getOption()
{
	var byChars = document.getElementById("byChars");
	if(byChars.checked==true)
	{
		return byChars.id;
	}

	var byLines = document.getElementById("byLines");
	if(byLines.checked==true)
	{
		return byLines.id;
	}
}

//Convert half-width(HW) characters into full-width(FW)
function halfToFull(text)
{
	var temp = 0;
	//This variable will hold the converted text
	var tempText = "";

	for(var i=0;i<text.length;i++)
	{
		//Replace all HW space with FW
		if(text.charCodeAt(i)==32)
		{
			temp=12288;
		}
		else if(text.charCodeAt(i)>=33&&text.charCodeAt(i)<=126)
		{
			temp=text.charCodeAt(i)+65248;
		}
		else
		{
			temp=text.charCodeAt(i);
		}
		tempText+=String.fromCharCode(temp);
	}
	
	return tempText;
}

function myFunction()
{
	var choice = getOption();

	if(choice=="byChars")
	{
		byChars();
	}
	if(choice=="byLines")
	{
		byLines();
	}
}

function byLines()
{
var userText = document.getElementById("userText").value;
var lines = document.getElementById("lines").value;

if(userText.length%lines!=0)
{
	var totolLength = userText.length;
	while(totolLength%lines!=0)
	{
		totolLength++;
	}
	var spaceNum = totolLength-userText.length;

	for (var i=0;i<spaceNum;i++)
	{
		userText+=String.fromCharCode(32);
	}
}

var lineLength = userText.length/lines;

userText = halfToFull(userText);

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
		TP1[i][j]=userText.charAt(TP1count);
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

function byChars()
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

var lines = userText.length/lineLength;

userText = halfToFull(userText);

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
		TP1[i][j]=userText.charAt(TP1count);
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