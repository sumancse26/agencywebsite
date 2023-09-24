import axios from '@/plugins/axios';

// get brand list
export const GET_BRAND_LIST = () => {
	const url = 'api/BrandList';
	return axios.get(url);
};
// get hero list
export const GET_HERO_LIST = () => {
	const url = 'api/HeroList';
	return axios.get(url);
};
// get work list
export const GET_WORK_LIST = () => {
	const url = 'api/WorkList';
	return axios.get(url);
};
// get featured project list
export const GET_FEATURED_PROJECT_LIST = () => {
	const url = 'api/FeaturedProject';
	return axios.get(url);
};
// get all project list
export const GET_ALL_PROJECT_LIST = () => {
	const url = 'api/AllProject';
	return axios.get(url);
};
