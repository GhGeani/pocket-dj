// import { createRoot } from 'react-dom/client';
// import React from 'react';
// import App from './components/App.js';
// document.body.innerHTML = '<div id="root"></div>';
// const root = createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// this is a temporary script to test the usage of chrome media API
(async () => {

  const currentTab = await chrome.tabs.getCurrent();
  console.log(currentTab);

  document.body.innerHTML = '<div id="root"></div>';
  const root = document.getElementById('root');
  const tabs = await chrome.tabs.query({ url: 'https://www.youtube.com/*' });
  console.log(tabs);
  console.log('streamId');
  const streamId = await chrome.tabCapture.getMediaStreamId({
    consumerTabId: currentTab.id,
    targetTabId: tabs[0].id
  });
  console.log(streamId);
  tabs.forEach(tab => {
    root.innerHTML += `<p>${tab.title}</p>`;
  });
  const tabMedia = await navigator.mediaDevices.getUserMedia(
    {
      audio: {
        mandatory: {
          chromeMediaSource: 'tab',
          chromeMediaSoirceId: tabs[0].id
        }
      }
    }
  )
  console.log(tabMedia);

  // const output = new AudioContext();
  // const source = output.createMediaStreamSource(tabMedia);
  // source.connect(output.destination);

})();