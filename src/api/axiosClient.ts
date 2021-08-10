import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/type',
  },
});

axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  return config;
});

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    if (response && response.data) {
      return response.data;
    }
    return [];
  },
  function (error) {
    throw error;
  }
);

export default axiosClient;
