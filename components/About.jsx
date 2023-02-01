import Link from 'next/link';
// import AboutImg from '../public/assets/about.jpg';

const About = () => {
	return (
		<div id='about' className='p-8'>
			<div className='w-full flex flex-row justify-between mt-[7rem]'>
				<div className='px-[7rem] py-[3rem]  w-[40%]'>
					<h2 className='uppercase text-xl tracking-widest text-[#5651e5] '>
						Any Type of Question and Discussion.
					</h2>
					<h3 className='my-2 text-lg'>
						Lets Talk
						<div className='inline-block border-red-500 border-b-2 w-40 '></div>
					</h3>

					<h3 className='text-red-500 font-bold my-2'>
						mekonnen.zelalem251@gmail.com
					</h3>

					<a href='tel:+25192456 527' className='text-red-500 font-bold'>
						Phone : +251 924 56 15 27
					</a>
				</div>

				<div className='pl-[1rem]  w-[50%]'>
					<h2 className='pl-2 uppercase text-[2rem] tracking-widest text-[#5651e5]'>
						About Me
					</h2>

					<ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
						<li className='py-2 text-gray-600'>
							I&rsquo;m a professional Full-stack Ruby on Rails/NodeJs/React
							developer.
						</li>
						<li>I have a BS in computer engineering </li>
						<li>I appreciates clean code, teamwork, and collaboration.</li>
						<li>
							I&rsquo;ve worked on Front-end and Full-Stack projects using a
							variety of frameworks, languages, and technologies.
						</li>
						Working with developers from five different time zones has enabled
						me to exhibit my competence in remote collaboration and pair
						programming.{' '}
						<li>
							I&rsquo;ve created over 25 projects utilizing various technologies
							such as JavaScript, Typescript, React, Redux.js, Node.js, Ruby on
							Rails, PostgreSQL, and others.
						</li>
						<div className='my-4'>
							<a
								className='px-3 py-2 bg-red-500 text-yellow-50'
								href='https://docs.google.com/document/d/13j_abcO1v8gP0BuQOZZAj_qYlhWSK0vlvRxSG_YPYkc/edit?usp=sharing'
								target='_blank'
								rel='noopener noreferrer'
							>
								Get My Resume
							</a>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
