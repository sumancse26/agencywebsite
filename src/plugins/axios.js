import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://agency.teamrabbil.com/',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
	// withCredentials: true
});

export default axiosInstance;
