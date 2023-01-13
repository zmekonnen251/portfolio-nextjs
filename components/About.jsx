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
						I&rsquo;m a developer with a BS in computer engineering who
						appreciates clean code, teamwork, and collaboration. I&rsquo;ve
						worked on Front-end and Full-Stack projects using a variety of
						frameworks, languages, and technologies. Working with developers
						from five different time zones has enabled me to exhibit my
						competence in remote collaboration and pair programming. I&rsquo;ve
						created over 25 projects utilizing various technologies such as
						JavaScript, Typescript, React, Redux.js, Node.js, Ruby on Rails,
						PostgreSQL, and others.
					</p>

					<h3> Some of My Achievements : </h3>
					<ul className=' list-outside px-7 py-1 leading-relaxed list-none'>
						<li>✔ Developed more than 25 Front-end and Full-stack projects.</li>
						<li>
							✔ Mentored junior developers and helped them not feel overwhelmed
							throughout the first several weeks of their careers.
						</li>
						<li>
							✔ Completed multiple group projects in a short amount of time,
							even ahead of schedule.
						</li>
						<li>
							✔ Spent over 1300 hours remotely learning algorithms, data
							structure, and building real-world projects with developers from
							different time zones.
						</li>
						<li>
							✔ Completed my bachelor&rsquo;s degree in a highly stressful
							environment with good grades.
						</li>
						<li>
							✔ Raised awareness of computer programming, teamwork, and
							communication skill in my community.
						</li>
						<li>
							✔ Assisted students in solving programming challenges, which
							boosted my problem-solving skill.
						</li>

						<li>
							If Are you looking for a motivated, trustworthy, and flexible
							software engineer? If so, please shoot me an email at
							<a
								className='text-[blue] underline inline-block pl-1'
								href='mailto:mekonnen.zelalem251@gmail.com'
							>
								mekonnen.zelalem251@gmail.com
							</a>{' '}
							and we will set up a 10-30 minute Zoom meeting.
						</li>
					</ul>
					{/* <Link href='/#projects'>
						<p className='py-2 text-gray-600 underline cursor-pointer'>
							Check out some of my latest projects.
						</p>
					</Link> */}
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
