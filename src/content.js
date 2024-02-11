(async () => {
  console.log('content.js loaded');
  // const streamId = await chrome.tabCapture.getMediaStreamId();

  // get yt play button
  const playButton = document.querySelector('.ytp-play-button');
  console.log(playButton.dataset.titleNoTooltip);
  // create a mutation observer to watch for changes in the play button
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-title-no-tooltip') {
        console.log(mutation.target.dataset.titleNoTooltip);
      }
    });
  });
  observer.observe(playButton, { attributes: true });
})();