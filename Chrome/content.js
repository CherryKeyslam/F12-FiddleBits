chrome.runtime.onMessage.addListener(
 function(request, sender, sendResponse) {
    let selection = window.getSelection();
    let selectionText = selection.toString();
    let range = selection.getRangeAt(0);
    range.deleteContents();
    let newNode = document.createElement("span");
    if(request.command == "highlight") {
       newNode.style.backgroundColor = "yellow";
    }
    else if(request.command == "reddify") {
       newNode.style.color = "red";
    }
    else if(request.command == "bolden") {
       newNode.style.fontWeight = "bold";
    }
    newNode.appendChild(document.createTextNode(selectionText));
    range.insertNode(newNode);
    return true;
});