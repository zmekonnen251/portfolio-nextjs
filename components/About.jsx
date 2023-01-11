import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/about.jpg';

const About = () => {
	return (
		<div
			id='about'
			className='w-full md:h-screen p-2 flex flex-col items-center py-[7rem]'
		>
			<h2 className='text-center uppercase text-xl tracking-widest text-[#5651e5]'>
				About
			</h2>
			<h2 className='text-center py-4'>Who I Am</h2>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
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

						<li>
							I completed my undergraduate degree in a highly stressful
							environment.
						</li>
						<li>My GPA is also above 3.0.</li>
						<li>
							If you need a completely remote Front-end (React/Redux) and
							Back-end (NodeJs,Ruby on Rails) developer, let&#39;s meet and
							talk. My email address is ,
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
				<div className='w-full h-auto m-auto mt-0 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<img
						src='https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=zmekonnen251&badges=3&show-avatar=true&style=--header-bg-color:%23000;--border-radius:10px;--avatar-size:130px'
						alt='zmekonnen251'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
