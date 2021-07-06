if(document.getElementById("devToolsExtraHelpFiddlebits")) {
  document.getElementById("devToolsExtraHelpFiddlebits").remove();
}
var tempo = document.createElement("input");
tempo.setAttribute("id", "devToolsExtraHelpFiddlebits");
tempo.value = "temporary";
document.body.appendChild(tempo);
tempo.style.opacity = 0;

browser.runtime.onMessage.addListener(request => {   
  console.log("Message from the background script:");
  console.log(request.edit);
  tempo.value = request.edit;
  tempo.select();
  document.execCommand("copy");
  return Promise.resolve({response: "Hi from content script"});
});