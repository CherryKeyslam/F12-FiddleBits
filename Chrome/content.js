chrome.runtime.onMessage.addListener(
 console.log("Message Incoming: ");
 function(request, sender) {
    if(request.command == "highlight") {
      console.log("Received command from background script: highlight");
    }
  sendResponse({respondance:"message received"});
  });