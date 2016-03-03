var listItems = document.getElementsByTagName("li");

for (var i = 0, ii = listItems.length; i < ii; i++)
{
	alert(listItems[i].nodeName);
}