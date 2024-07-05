// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === "complete") {
//     chrome.scripting.executeScript(
//       {
//         target: { tabId: tabId },
//         func: () => document.documentElement.outerHTML,
//       },
//       (results) => {
//         const domContent = results?.[0].result;
//         chrome.tabs.sendMessage(tabId, {
//           type: "NEW",
//           domContent: domContent,
//           url: tab.url,
//         });
//       }
//     );
//   }
// });
