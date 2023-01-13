import Image from 'next/image';
import React from 'react';
import mydriveImg from '../public/assets/projects/mydrive.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const myDrive = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={mydriveImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Cloud Drive App</h2>
					<h3>React JS / React-Bootstrap / Firebase / JavaScript</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						Cloude Drive App is Full-stack React and Firebase app for storing
						files in online. Before using the app you have to register and
						login. You can create,delete and delelet folders and files. I built
						this app using React,JavaScript,Firebase and React-Bootstrap.
					</p>
					<a
						href='https://my-cloud-drive1.netlify.app/'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
					</a>
					<a
						href='https://github.com/zmekonnen251/my-drive'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4'>Code</button>
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React JS
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Firebase
							</p>

							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> JavaScript
							</p>

							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React-Bootstrap
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> GitHub
							</p>
						</div>
					</div>
				</div>
				<Link href='/#projects'>
					<p className='underline cursor-pointer'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default myDrive;
