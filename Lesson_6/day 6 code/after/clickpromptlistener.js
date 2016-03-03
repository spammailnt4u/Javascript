var WikipediaLink =
{
	init: function()
	{
		var link = document.getElementById("wikipedia");

		link.addEventListener("click", WikipediaLink.clickListener, false);
	},

	clickListener: function(event)
	{
		if (!confirm("Are you sure you want to leave this site?"))
		{
			event.preventDefault();
		}
	}
};

WikipediaLink.init();
