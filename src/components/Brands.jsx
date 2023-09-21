import { GET_BRAND_LIST } from '@/apiCalling/agencyWebSite';

const getBrandList = async () => {
	// defining brand list api
	try {
		const res = GET_BRAND_LIST();
		const brandList = await res.json();
		return brandList;
	} catch (err) {
		throw new Error(err);
	}
};

const Brands = async () => {
	const brandList = await getBrandList(); //calling brand list api
	return (
		<section className="py-20">
			{brandList}
			<div className="container mx-auto px-4 text-center">
				<h3 className="mb-16 text-2xl font-heading">Trusted by brands all over the world</h3>
				<div className="flex flex-wrap -mx-2">
					<div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
						<a href="#">
							<img className="mx-auto h-8" src="atis-assets/logo/brands/slack.png" alt="" />
						</a>
					</div>
					<div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
						<a href="#">
							<img className="mx-auto h-8" src="atis-assets/logo/brands/dropbox.png" alt="" />
						</a>
					</div>
					<div className="mb-12 md:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
						<a href="#">
							<img className="mx-auto h-8" src="atis-assets/logo/brands/spotify.png" alt="" />
						</a>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 px-2">
						<a href="#">
							<img className="mx-auto h-8" src="atis-assets/logo/brands/stripe.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands;
