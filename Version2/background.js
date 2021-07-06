browser.contextMenus.create({
    id: "highlight",
    title: "Highlight",
    contexts: ["selection"],
});
browser.contextMenus.create({
    id: "redify",
    title: "Reddify",
    contexts: ["selection"],
});
browser.contextMenus.create({
    id: "boldify",
    title: "Blunt",
    contexts: ["selection"],
});
browser.contextMenus.onClicked.addListener(function(info,tab) {
    if(info.menuItemId == "highlight") {
      browser.tabs.sendMessage(tab.id,{type: "highlight"});
    }
    else if(info.menuItemId == "redify") {
      browser.tabs.sendMessage(tab.id,{type: "redify"});
    }
    else if(info.menuItemId == "boldify") {
      browser.tabs.sendMessage(tab.id,{type: "boldify"});
    }
  }
)
