import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import useVideos from './hooks/useVideos';

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, searchVideos] = useVideos();

  useEffect(() => {
    setCurrentVideo(videos[0]);
  }, [videos])
  
  return(
    <div className="ui container">
      <SearchBar onSearchSubmit={searchVideos} />
      <div className="ui grid">
        <div className="ui row">
          <div className="column video-section">
            <VideoDetail video={currentVideo} />
          </div>
          <div className="column list-section">
            <VideoList videos={videos} onVideoSelect={setCurrentVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;