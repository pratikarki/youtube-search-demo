import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>
  }

  const videoLink = `https://www.youtube.com/embed/${video.id.videoId}`;


  return(
    <div>
      <div className="ui embed">
        <iframe title="Youtube Video Player" src={videoLink} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{ReactHtmlParser(video.snippet.title)}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;