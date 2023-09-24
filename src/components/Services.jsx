import { GET_ALL_SERVICES_LIST } from '@/apiCalling/agencyWebSite';

const getAllServices = async () => {
	try {
		const res = await GET_ALL_SERVICES_LIST();
		return res.data;
	} catch (err) {
		throw new Error(err);
	}
};

const Services = async () => {
	const services = await getAllServices();
	console.log(services);
	return (
		<div>
			<section>
				<div className="skew skew-top mr-for-radius">
					<svg
						className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
						viewBox="0 0 10 10"
						preserveAspectRatio="none">
						<polygon fill="currentColor" points="0 0 10 10 0 10" />
					</svg>
				</div>
				<div className="skew skew-top ml-for-radius">
					<svg
						className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
						viewBox="0 0 10 10"
						preserveAspectRatio="none">
						<polygon fill="currentColor" points="0 10 10 0 10 10" />
					</svg>
				</div>
				{services?.map((service) => (
					<div className="py-20 bg-gray-50 radius-for-skewed" key={service.id}>
						<div className="container mx-auto px-4">
							<div className="flex flex-wrap items-center -mx-4">
								<div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
									<div className="max-w-md">
										<span className="text-green-600 font-bold">{service.tag || ''}</span>
										<h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
											{service.title || ''}
										</h2>
										<div className="mb-6 max-w-sm">
											<p className="text-gray-500 leading-loose">{service.des || ''}</p>
										</div>
									</div>
								</div>
								<div className="w-full lg:w-1/2">
									<div className="mb-4 flex flex-wrap items-end">
										<div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
											<img
												className="w-full h-32 lg:h-48 object-cover rounded"
												src={service.image1}
											/>
										</div>
										<div className="w-full lg:w-1/3 px-3">
											<img
												className="w-full h-32 object-cover rounded"
												src={service.image2}
												alt=""
											/>
										</div>
									</div>
									<div className="flex flex-wrap items-start">
										<div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
											<img
												className="w-full h-32 object-cover rounded"
												src={service.image3}
												alt=""
											/>
										</div>
										<div className="w-full lg:w-2/3 px-3">
											<img
												className="w-full h-32 lg:h-48 object-cover rounded"
												src={service.image4}
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}

				<div className="skew skew-bottom mr-for-radius">
					<svg
						className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
						viewBox="0 0 10 10"
						preserveAspectRatio="none">
						<polygon fill="currentColor" points="0 0 10 0 0 10" />
					</svg>
				</div>
				<div className="skew skew-bottom ml-for-radius">
					<svg
						className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
						viewBox="0 0 10 10"
						preserveAspectRatio="none">
						<polygon fill="currentColor" points="0 0 10 0 10 10" />
					</svg>
				</div>
			</section>
		</div>
	);
};

export default Services;
