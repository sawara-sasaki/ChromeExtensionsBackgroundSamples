chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.text == "check") {
    var b = window.document.getElementsByClassName('target-button');
    if (b != null && b[0] != null) {
      b[0].click()
      sendResponse("target-button clicked");
    }
    sendResponse("0");
  } else {
    sendResponse("0");
  }
});
