
import axios from 'axios';

const KEY = 'AIzaSyD5of_7w_kI8MD85zrlgHt4OyG3clmMyz4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
