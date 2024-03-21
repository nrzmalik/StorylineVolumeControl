function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MirVVrzqru":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function toggleMute() {
  const mediaElements = document.querySelectorAll('audio, video');
  mediaElements.forEach(function(element) {
    element.muted = !element.muted;
  });
}
toggleMute();

}

};
