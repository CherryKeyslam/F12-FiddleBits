chrome.contextMenus.create({
  title: "Highlight", 
  contexts:["selection"], 
  id: "highlight"
});
chrome.contextMenus.create({
  title: "Reddify", 
  contexts:["selection"], 
  id: "reddify"
});
chrome.contextMenus.create({
  title: "Blunt", 
  contexts:["selection"], 
  id: "bolden"
});

chrome.contextMenus.onClicked.addListener(
(info,tab) => {
  if(info.menuItemId == "highlight") {
    chrome.tabs.sendMessage(tab.id, {command: "highlight"},function(response) {
      console.log('Operation success. Command sent and received: Highlight ');
  })
  }
  else if(info.menuItemId == "reddify") {
    chrome.tabs.sendMessage(tab.id, {command: "reddify"},function(response) {
      console.log('Operation success. Command sent and received: Reddify ');
    });
  }
  else if(info.menuItemId == "bolden") {
    chrome.tabs.sendMessage(tab.id, {command: "bolden"},function(response) {
      console.log('Operation success. Command sent and received: Blunt ');
    });
  }
});
