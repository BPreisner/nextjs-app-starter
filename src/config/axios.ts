import axios, { AxiosInstance } from 'axios';

const isDev = process.env.NODE_ENV !== 'production';
const developmentUrl = 'http://localhost:3000/api';
const productionUrl = 'https://PAGE_URL/api';

const baseURL = isDev ? developmentUrl : productionUrl;

const instance: AxiosInstance = axios.create({
   baseURL,
});

export default instance;
