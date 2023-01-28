import Image from 'next/image';
import React from 'react';
import tizitachinImg from '../public/assets/projects/tizitachin.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const myNote = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={tizitachinImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>MyNotes App</h2>
					<h3>ExpressJs / Node / MongoDB / Material Ui / React JS </h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						Tizitachin Social App is a full-stack Express/React app that users
						shares their memories with other users. a user can create ,edit and
						delete his/her posts. a user also can like,comment others post. the
						app has a search functionaliy. any user can see posts and search
						using post title or tags. a user can signin using google or can
						register using his email and after verifying his/her email can
						login. I built this application using ExpressJs ,React,JavaScript
						and Material-UI.
					</p>
					<a
						href='https://tizitachin-api.onrender.com/'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
					</a>
					<a
						href='https://github.com/zmekonnen251/tizitachin-app'
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
								<RiRadioButtonFill className='pr-1' /> Express JS
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React JS
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> JavaScript
							</p>

							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Material UI
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

export default myNote;