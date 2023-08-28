import React from 'react';
import { useState, useEffect } from "react";
import TrackDeck from './reusable/TrackDeck.js';

const getTabs = async () => {
  return await chrome.tabs.query({ url: 'https://www.youtube.com/*'});
}

const App = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    getTabs().then(tabs => setTabs(tabs));
  }, []);

  return (
    <main id='App'>
      {tabs.map((tab) => (
        <TrackDeck 
          key={tab.id}
          title={tab.title}
          url={tab.url}
          windowId={tab.windowId}
        />
      ))}
    </main>
  )
}

export default App;
