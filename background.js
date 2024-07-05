chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    // tab.url &&
    // tab.url.includes("sunnxt.com") &&
    changeInfo.status === "complete"
  ) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        func: () => document.documentElement.outerHTML,
      },
      (results) => {
        const domContent = results?.[0].result;
        chrome.tabs.sendMessage(tabId, {
          type: "NEW",
          videoId: urlParameters.get("v"),
          domContent: domContent,
          url: tab.url,
        });
      }
    );
  }
});
