import Image from 'next/image';
import React from 'react';
import recipeImg from '../public/assets/projects/recipe.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Recipe = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={recipeImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Recipe App</h2>
					<h3>Ruby on Rails / postgreSql / Bootstrap / CSS</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						The Recipe app keeps track of all your recipes, ingredients, and
						inventory. It will allow you to save ingredients, keep track of what
						you have, create recipes, and generate a shopping list based on what
						you have and what you are missing from a recipe. Also, since sharing
						recipes is an important part of cooking the app should allow you to
						make them public so anyone can access them.
					</p>
					<a
						href='https://github.com/zmekonnen251/Recipe-app'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4 mr-8'>Code</button>
					</a>
					<a
						href='https://vast-depths-87802.herokuapp.com/'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4'>Demo</button>
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Ruby on Rails
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Ruby
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Bootstrap
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> postgreSql
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> CSS
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

export default Recipe;
