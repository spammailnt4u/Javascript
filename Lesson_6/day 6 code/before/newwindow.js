var ExternalLinks =
{
	init: function()
	{

	},

	clickHandler: function()
	{

	},
	
	getElementsByClassName: function(className)
	{
		// get all elements in the document
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
};

ExternalLinks.init();
