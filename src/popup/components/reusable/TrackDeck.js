import React from 'react';

const TrackDeck = (props) => {
  const { title, url, windowId } = props;
  return (
    <section className='track-deck'>
      <small>{ title }</small>
    </section>
  )
}

export default TrackDeck;