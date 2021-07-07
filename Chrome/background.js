chrome.contextMenus.create({
  title: "Highlight", 
  contexts:["all"], 
  id: "highlight"
});

chrome.contextMenus.onClicked.addListener(
(info,tab) => {
  if(info.menuItemId == "highlight") {
    chrome.tabs.sendMessage(tab.id, {command: "highlight"});
    console.log("Sent command highlight");
  }
});
