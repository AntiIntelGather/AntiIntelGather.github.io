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