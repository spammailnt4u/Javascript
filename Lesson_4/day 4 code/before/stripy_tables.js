
var tables = document.getElementsByClassName("dataTable");

for (var i = 0, ii = tables.length; i < ii; i++)
{
	var tbody = tables[i].getElementsByTagName('tbody');
	var tr = tbody[0].getElementsByTagName('tr');
	for (var j = 1, jj = tr.length; j < jj; j += 2)
	{
		tr[j].className = "alt"
	}
}
