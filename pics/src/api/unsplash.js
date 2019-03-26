import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 5780c3953f5d03a1beadb465f05793311fb3cf19538b711edf09bb2c5dd935b3'
    }
});