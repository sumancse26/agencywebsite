import { GET_BRAND_LIST } from '@/apiCalling/agencyWebSite';

const getBrandList = async () => {
	try {
		const brandList = await GET_BRAND_LIST();
		return brandList.data;
	} catch (err) {
		throw new Error(err);
	}
};

const Brands = async () => {
	const brandList = await getBrandList(); //calling brand list api
	return (
		<section className="py-20">
			<div className="container mx-auto px-4 text-center">
				<h3 className="mb-16 text-2xl font-heading">Trusted by brands all over the world</h3>
				<div className="flex flex-wrap -mx-2">
					{brandList?.map((brand) => (
						<div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2" key={brand.id}>
							<a href="#">
								<img className="mx-auto h-8" src={brand.image} alt="" />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Brands;
