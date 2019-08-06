import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 96985557f06206359e08fa7f55b4af3103673c213bbd8c788c226db121a6af4a'
    }
});