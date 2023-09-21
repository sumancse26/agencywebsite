import axios from '@/plugins/axios';

// get brand list
export const GET_BRAND_LIST = async () => {
	const url = 'urlhere';
	return await axios.get(url);
};
