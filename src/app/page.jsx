import Brands from '@/components/Brands';
import Contacts from '@/components/Contacts';
import FeaturedProject from '@/components/FeaturedProject';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
const Page = async () => {
	return (
		<div>
			<Hero />
			<Stats />
			<FeaturedProject />
			<Contacts />
			<Brands />
		</div>
	);
};
export default Page;
