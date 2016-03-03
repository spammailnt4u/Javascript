var ExternalLinks =
{
	init: function()
	{
		var extLinks = $(".external");
		
		for (var i = 0, ii = extLinks.length; i < ii; i++)
		{
			$(extLinks[i]).bind("click", ExternalLinks.clickListener);
		}
	},

	clickListener: function(event)
	{
		open(this.href);
		event.preventDefault();
	}
};

ExternalLinks.init();
