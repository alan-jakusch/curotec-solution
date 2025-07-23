import axios from 'axios';

const api = axios.create({
  baseURL: 'endpoint_url',
});

export default api;