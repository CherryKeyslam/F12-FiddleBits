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
      browser.tabs.sendMessage(tab.id,{edit: "<span style=\"background-color:yellow\">" + info.selectionText + "</span>"});
    }
    else if(info.menuItemId == "redify") {
      browser.tabs.sendMessage(tab.id,{edit: "<span style=\"color:red\">" + info.selectionText + "</span>"});
    }
    else if(info.menuItemId == "boldify") {
      browser.tabs.sendMessage(tab.id,{edit: "<span style=\"font-weight:bold\">" + info.selectionText + "</span>"});
    }
  }
)
