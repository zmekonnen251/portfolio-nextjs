import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
	return (
		<div
			id='about'
			className='w-full md:h-screen p-2 flex flex-col items-center py-[7rem]'
		>
			<p className='text-center uppercase text-xl tracking-widest text-[#5651e5]'>
				About
			</p>
			<h2 className='text-center py-4'>Who I Am</h2>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='py-2 text-gray-600'>I am not your average developer</p>
					<p className='py-2 text-gray-600'>
						I&#39;m a Full-stack Developer with a track record of working well
						with other devs. Electrical and computer engineering was my major at
						Addis Ababa University. and currently completed a full-stack web
						development bootcamp from Microverse, an online software development
						school. I&#39;m seeking a front-end,full-stack and back-end web
						development project that can be done entirely from home.
					</p>
					<h3>Achievements:</h3>
					<ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
						<li>
							In microverse, I mentored new students and helped them not feel
							overwhelmed throughout the first several weeks of the program.
						</li>
						<li>
							Completed multiple group projects in a short amount of time, even
							ahead of schedule.
						</li>
						<li>
							Spent over 1300 hours learning algorithms, data structures, and
							front-end development while also working on projects using HTML,
							CSS, JavaScript, React, and Redux.
						</li>
						{/* <li>
							Worked on a team of 4 to build a full-stack application using
							React, Redux, and Ruby on Rails.
						</li>
						<li>
							While volunteering at Meles Zenawi Foundation to teach high school
							students about fundamental programming using Python, computer
							science, and algorithms, I gained experience as a course
							instructor.
						</li> */}
						<li>
							I completed my undergraduate degree in a highly stressful
							environment.
						</li>
						<li>My GPA is also above 3.0.</li>
						<li>
							If you need a completely remote front-end (react/redux) developer,
							let&#39;s meet and talk. My email address is ,
							<a
								className='text-[blue] underline inline-block pl-1'
								href='mailto:mekonnen.zelalem251@gmail.com'
							>
								mekonnen.zelalem251@gmail.com.
							</a>
						</li>
					</ul>

					<Link href='/#projects'>
						<p className='py-2 text-gray-600 underline cursor-pointer'>
							Check out some of my latest projects.
						</p>
					</Link>
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<Image src={AboutImg} className='rounded-xl' alt='/' />
				</div>
			</div>
		</div>
	);
};

export default About;
