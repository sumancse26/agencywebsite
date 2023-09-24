const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
export const getConvertedDate = (date) => {
	let newDate = new Date(date);
	return months[newDate.getMonth()] + ' ' + newDate.getFullYear().toString();
};
