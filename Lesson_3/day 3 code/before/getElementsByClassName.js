var listItems = getElementsByClassName("quirky");

for (var i = 0, ii = listItems.length; i < ii; i++)
{
	alert(listItems[i].nodeName);
}

function getElementsByClassName(className)
{
	// Get a list of ALL elements in the document this isn't necessary anymore because
	//all browsers support getElementsByClassName
	if (document.all)
	{
		var allElements = document.all;
	}
	else
	{
		var allElements = document.getElementsByTagName("*");
	}

	var foundElements = [];

	for (var i = 0, ii = allElements.length; i < ii; i++)
	{
		if (allElements[i].className == className)
		{
			foundElements[foundElements.length] = allElements[i];
		}
	}

	return foundElements;
}
