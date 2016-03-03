var StrayClickCatcher =
{
	init: function()
	{
		var links = document.getElementsByTagName("a");

		document.addEventListener("click", StrayClickCatcher.strayClickListener, false);
		for (var i = 0, ii = links.length; i < ii; i++)
		{
			links[i].addEventListener("click", StrayClickCatcher.linkClickListener, false);
		}
	},

	strayClickListener: function(event)
	{
		alert("Did you mean to click a link? It's that blue, underlined text.");
	},

	linkClickListener: function(event)
	{
		event.stopPropagation();
	}
};

StrayClickCatcher.init();
