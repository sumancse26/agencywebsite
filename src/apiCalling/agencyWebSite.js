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
// get all services list
export const GET_ALL_SERVICES_LIST = () => {
	const url = 'api/AllService';
	return axios.get(url);
};
// get  social list
export const GET_ALL_SOCIAL_LIST = () => {
	const url = 'api/SocialLink';
	return axios.get(url);
};
// get  StatList
export const GET_STAT_LIST = () => {
	const url = 'api/StatList';
	return axios.get(url);
};
// get  StatList
export const GET_TEAM_LIST = () => {
	const url = 'api/TeamList';
	return axios.get(url);
};
// get  testimonialList
export const GET_TESTIMONIAL_LIST = () => {
	const url = 'api/TestimonialList';
	return axios.get(url);
};
