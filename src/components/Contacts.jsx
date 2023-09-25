'use client';

import { CREATE_CONTACT } from '@/apiCalling/agencyWebSite';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
	// initialize state
	const [contact, setContact] = useState({
		fname: null,
		lname: null,
		email: null,
		msg: null
	});

	//input field
	const inputHandler = (e) => {
		setContact((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value
			};
		});
	};

	//form submit
	const formSubmit = async (e) => {
		e.preventDefault();

		try {
			if (contact.fname) {
				const res = await CREATE_CONTACT(contact);
				if (res.data.id) {
					setContact({
						fname: null,
						lname: null,
						email: null,
						msg: null
					});
					notify();
				}
			}
		} catch (err) {
			throw new Error(err);
		}
	};

	//toast message
	const notify = () => toast('Success!');
	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<ToastContainer />
				<div className="flex flex-wrap items-center justify-center -mx-4">
					<div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
						<a className="mb-6 inline-block text-3xl font-bold leading-none" href="#">
							<img className="h-12" src="atis-assets/logo/atis/atis-mono-sign.svg" alt="" width="auto" />
						</a>
						<h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
							So much more than a business analytics tool
						</h2>
						<p className="mb-8 text-gray-500 leading-loose">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales
							egestas lobortis.
						</p>
						<a
							className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-250 rounded-l-xl rounded-t-xl"
							href="#">
							Get Started
						</a>
					</div>
					<div className="w-full lg:w-1/2 px-4">
						<div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
							<div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
								<form onSubmit={formSubmit}>
									<div className="mb-6">
										<span className="text-sm text-gray-400">Sign Up</span>
										<h4 className="text-2xl">Create an account</h4>
									</div>
									<div className="mb-4 flex flex-wrap -mx-2">
										<div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
											<input
												className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
												type="text"
												name="fname"
												placeholder="First Name"
												onChange={(e) => inputHandler(e)}
											/>
										</div>
										<div className="w-full lg:w-1/2 px-2">
											<input
												className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
												type="text"
												name="lname"
												placeholder="Last Name"
												onChange={(e) => inputHandler(e)}
											/>
										</div>
									</div>
									<input
										className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
										type="email"
										name="email"
										placeholder="hello@example.com"
										onChange={(e) => inputHandler(e)}
									/>
									<textarea
										className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
										type="text"
										name="msg"
										placeholder="Message"
										onChange={(e) => inputHandler(e)}
									/>

									<button className="mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200">
										Send
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
