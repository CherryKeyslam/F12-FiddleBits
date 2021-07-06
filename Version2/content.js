
browser.runtime.onMessage.addListener(request => {   
  console.log("Command is: " + request.type);
  let selection = window.getSelection();
  let selectionText = selection.toString();
  let range = selection.getRangeAt(0);
  range.deleteContents();
  let newNode = document.createElement("span");
  if(request.type == "highlight") {
     newNode.style.backgroundColor = "yellow";
  }
  else if(request.type == "redify") {
     newNode.style.color = "red";
  }
  else if(request.type == "boldify") {
     newNode.style.fontWeight = "bold";
  }
  newNode.appendChild(document.createTextNode(selectionText));
  range.insertNode(newNode);
  return Promise.resolve({response: "Hi from content script"});
});