var ExternalLinks =
{
	init: function()
	{
		var extLinks = ExternalLinks.getElementsByClassName("external");
		
		for (var i = 0, ii = extLinks.length; i < ii; i++)
		{
			extLinks[i].onclick = ExternalLinks.clickHandler;
		}
	},

	clickHandler: function()
	{
		open(this.href);
		return false;
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
