import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

  const renderedList = videos.map(el => {
    return(
      <VideoItem
        key={el.etag}
        eachVideo={el}
        onVideoSelect={onVideoSelect}
      />
    )
  })

  return(
    <div className="ui relaxed divided list">{renderedList}</div>
  )
}

export default VideoList;