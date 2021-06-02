import { useState } from 'react';
import youtube from '../api/YoutubeConfig';

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  // for default search term
  // useEffect(() => {
  //   searchVideos(defaultTerm);
  // }, [defaultTerm])

  const searchVideos = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term }
    })
    setVideos(response.data.items);
  }

  return [videos, searchVideos];
}

export default useVideos;