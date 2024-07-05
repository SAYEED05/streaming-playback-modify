chrome.storage.sync.get(["forwardSeekTime", "backwardSeekTime"], (data) => {
  const forwardSeekTime = parseInt(data.forwardSeekTime) || 2; // default to 2 seconds if not set
  const backwardSeekTime = parseInt(data.backwardSeekTime) || 2; // default to 2 seconds if not set

  document.addEventListener("keydown", (event) => {
    const videoElement = getVideoElement();
    if (!videoElement) return;
    let handled = false;
    switch (event.key) {
      case ".":
        videoElement.currentTime += forwardSeekTime;
        handled = true;
        break;
      case ",":
        videoElement.currentTime -= backwardSeekTime;
        handled = true;
        break;
      default:
        break;
    }
    if (handled) {
      event.stopPropagation();
      event.preventDefault();
    }
  });

  function getVideoElement() {
    const url = window.location.href;
    let videoElement = null;

    if (url.includes("sunnxt")) {
      videoElement = document.getElementById("player_html5_api");
    } else if (url.includes("netflix")) {
      // Netflix usually uses video tag without specific ID, handle accordingly
      videoElement = document.querySelector("video");
    } else if (url.includes("primevideo")) {
      // Amazon Prime Video
      const container = document.querySelector(".rendererContainer");
      if (container) {
        videoElement = container.querySelector("video");
      }
    } else if (url.includes("hotstar.com")) {
      // Hotstar
      videoElement = document.querySelector("video");
    } else {
      // Handle more platforms here
    }

    return videoElement;
  }
});
