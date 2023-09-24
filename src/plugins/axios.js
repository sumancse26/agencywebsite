import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.BASE_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	},
	withCredentials: true
});

export default axiosInstance;
