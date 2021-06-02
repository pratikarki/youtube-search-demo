import axios from 'axios';

const KEY = 'AIzaSyDGEwklPLzGItmAdhM8O6dmqkDvxFOmQUY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY
  }
})

