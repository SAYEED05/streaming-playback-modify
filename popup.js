document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("time-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const forwardSeek = document.getElementById("fwd_seek").value;
    const backwardSeek = document.getElementById("bwd_seek").value;

    console.log("Forward Seek Time:", forwardSeek);
    console.log("Backward Seek Time:", backwardSeek);

    // Save the values to storage
    chrome.storage.sync.set(
      {
        forwardSeekTime: forwardSeek,
        backwardSeekTime: backwardSeek,
      },
      () => {
        console.log("Values saved to storage.");
      }
    );
  });
});
