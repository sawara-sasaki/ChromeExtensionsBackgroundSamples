chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.text == "check") {
    var m = window.document.getElementsByClassName('ytp-mute-button');
    var s = window.document.getElementsByClassName('ytp-ad-skip-button');
    if (s != null && s[0] != null) {
      s[0].click();
      if (m != null && m[0] != null &&
        window.document.getElementsByClassName('ytp-volume-slider-handle')[0].getAttribute('style') == 'left: 0px;') {
        m[0].click();
        document.getElementById("movie_player").style.filter = "brightness(1)";
      }
      sendResponse("skip ad");
      return;
    }

    var o = window.document.getElementsByClassName('ytp-ad-overlay-close-button');
    if (o != null && o[0] != null) {
      o[0].click();
      sendResponse("close ad-overlay");
      return;
    }

    var p = window.document.getElementsByClassName('ytp-ad-preview-container');
    if (p != null && p[0] != null) {
      if (m != null && m[0] != null &&
        window.document.getElementsByClassName('ytp-volume-slider-handle')[0].getAttribute('style') != 'left: 0px;') {
        m[0].click();
      }
      var ap = window.document.getElementsByClassName('ytp-ad-preview-image');
      if (ap != null && ap[0] != null &&  ap[0].style.display == "none") {
        document.getElementById("movie_player").style.filter = "brightness(0.1)";
      } else {
        document.getElementById("movie_player").style.filter = "brightness(0.2)";
      }
      sendResponse("muted");
      return;
    } else if (m != null && m[0] != null &&
        document.getElementById("movie_player").style.filter == "brightness(0.2)") {
      m[0].click();
      document.getElementById("movie_player").style.filter = "brightness(1)";
      return;
    }
    sendResponse("0");
  } else {
    sendResponse("0");
  }
});
