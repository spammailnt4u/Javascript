var lists = document.getElementsByTagName("ul");
var secondList = lists[1];
var secondListItems = secondList.getElementsByTagName("li");

for (var i = 0, ii = secondListItems.length; i < ii; i++)
{
	alert(secondListItems[i].nodeName);
}