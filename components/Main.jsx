import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
	FaGithub,
	FaLinkedinIn,
	FaAngellist,
	FaMedium,
	FaTwitter,
} from 'react-icons/fa';

const Main = () => {
	return (
		<div id='home' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-600'>
						LET&#39;S BUILD SOMETHING TOGETHER
					</p>
					<h1 className='py-4 text-gray-700'>
						Hello, I&#39;m <span className='text-[#5651e5]'>Zelalem</span>
					</h1>
					<h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
					<p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
						I&apos;m focused on building responsive Full-stack web applications
						while learning a new technologies.
					</p>
					<div className='flex items-center justify-between max-w-[500px] m-auto py-4'>
						<a
							href='https://www.linkedin.com/in/zelalem-g-mekonnen/'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<FaLinkedinIn />
							</div>
						</a>
						<a
							href='https://github.com/zmekonnen251'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<FaGithub />
							</div>
						</a>
						<a
							href='https://angel.co/u/zelalem-getachew-mekonnen'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<FaAngellist />
							</div>
						</a>
						<a
							href='https://medium.com/@mekonnen.zelalem251'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<FaMedium />
							</div>
						</a>
						<a
							href='https://twitter.com/mek_zela'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<FaTwitter />
							</div>
						</a>

						<Link href='/#contact'>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<AiOutlineMail />
							</div>
						</Link>
						<Link href='/resume'>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<BsFillPersonLinesFill />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
