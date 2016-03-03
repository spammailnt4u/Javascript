var Testscript =
  {
    init: function()
    {
      var link = document.getElementsByTagName('a');
      link[0].onclick = Testscript.clickHandler;
    },
    clickHandler: function()
    {
      open("after");
      return false;
    }
  };
Testscript.init();
