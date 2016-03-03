var StripyTables =
{
	init: function()
	{
		var tables = StripyTables.getElementsByClassName("dataTable");

		for (var i = 0, ii = tables.length; i < ii; i++)
		{
			var tbodys = tables[i].getElementsByTagName("tbody");

			for (var j = 0, jj = tbodys.length; j < jj; j++)
			{
				var rows = tbodys[j].getElementsByTagName("tr");

				for (var k = 1, kk = rows.length; k < kk; k += 2)
				{
					rows[k].className = "alt";
				}
			}
		}
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

StripyTables.init();