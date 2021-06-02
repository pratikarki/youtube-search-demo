import './VideoItem.css';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const VideoItem = ({ eachVideo, onVideoSelect }) => {
  const data = eachVideo.snippet;

  const publishedDate = new Date(data.publishedAt);
  let diff = new Date().getFullYear() - publishedDate.getFullYear();
  let publishedAgo = `${diff} ${diff=== 1 ? 'year': 'years'} ago`;

  if (diff === 0) {
    diff = new Date().getMonth() - publishedDate.getMonth();
    publishedAgo = `${diff} ${diff===1 ? 'month' : 'months'} ago`;

    if (diff === 0) publishedAgo = `Less than a month ago`;
  }

  return(
    <div className="video-item item" onClick={() => {onVideoSelect(eachVideo)}}>
      <img 
        className="ui image"
        src={data.thumbnails.medium.url}
        alt={data.title}
      />
      <div className="content">
        <div className="header">{ReactHtmlParser(data.title)}</div>
        <div className="description">{data.channelTitle}<br />{publishedAgo}</div>
      </div>
    </div>
  )
}

export default VideoItem;