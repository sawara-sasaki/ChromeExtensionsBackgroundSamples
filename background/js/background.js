var Background = function() {
  this.initialize();
};

Background.prototype = {
  initialize: function() {
    this.update();
  },
  update: function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { text: "check" }, function (res) {
        console.log(res);
      });
    });
    setTimeout(function() {
      this.update();
    }.bind(this), 1000);
  },
};
var background = new Background();
