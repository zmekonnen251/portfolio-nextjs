import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
	return (
		<>
			<Head>
				<title>Zelalem | Resume</title>
				<meta
					name='description'
					content="I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
				/>
				<link rel='icon' href='/fav.png' />
			</Head>

			<div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
				<h2 className='text-center'>Resume</h2>
				<div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
					<h2 className='text-center'>ZELALEM MEKONNEN</h2>
					<div className='flex'>
						<a
							href='https://www.linkedin.com/in/zelalem-g-mekonnen/'
							target='_blank'
							rel='noreferrer'
						>
							<FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
						</a>
						<a
							href='https://github.com/zmekonnen251'
							target='_blank'
							rel='noreferrer'
						>
							<FaGithub size={20} style={{ marginRight: '1rem' }} />
						</a>
					</div>
				</div>
				<div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
					<div className='hidden sm:block'>
						<p>
							Proven Leadership <span className='px-1'>|</span> Web Development{' '}
							<span className='px-1'>|</span> Complex Problem Solving
						</p>
					</div>
					<div className='block sm:hidden'>
						<p>Proven Leadership</p>
						<p className='py-2'>Web Development</p>
						<p>Complex Problem Solving</p>
					</div>
				</div>
				<p>
					Analytical, innovative, and motivated web development professional
					with experience in customer service, team leadership, and
					organizational effectiveness in fast-paced and challenging
					environments. Adept at developing strategies and driving streamlined
					operations. Diverse analytical skills, team collaboration, and
					relationship building. Consummate professional, and motivated leader,
					with solid interpersonal abilities and complex problem-solving skills.
					Effective and proven track record of critical thinking, idea
					generation, and optimizing efficiencies.
				</p>
				{/* Skills */}
				<div className='flex flex-col justify-start py-4'>
					<h5 className='text-center underline text-[18px] py-2'>SKILLS</h5>
					<p className='py-2'>
						<span className='font-bold'>Front-End:</span>
						<span className='px-2'>|</span>HTML
						<span className='px-2'>|</span>CSS
						<span className='px-2'>|</span>SASS
						<span className='px-2'>|</span>Javascript
						<span className='px-2'>|</span>React
						<span className='px-2'>|</span>Next JS
						<span className='px-2'>|</span>Redux
						<span className='px-2'>|</span>Tailwind
					</p>
					<p>
						<span className='font-bold'>Back-End:</span>
						<span className='px-2'>|</span> RESTAPI
						<span className='px-2'>|</span> Ruby
						<span className='px-2'>|</span> Ruby on Rails
						<span className='px-2'>|</span> NodeJs
						<span className='px-2'>|</span> Express
						<span className='px-2'>|</span> postgreSQL
						<span className='px-2'>|</span> MongoDB
					</p>
					<p>
						<span className='font-bold'>Tools & Methods:</span>
						<span className='px-2'>|</span> Git
						<span className='px-2'>|</span> GitHub
						<span className='px-2'>|</span> Heroku
						<span className='px-2'>|</span> Netlify
						<span className='px-2'>|</span> Responsive Design
						<span className='px-2'>|</span> CI/CD
						<span className='px-2'>|</span> TDD
						<span className='px-2'>|</span> Chrome Dev Tools
					</p>
					<p>
						<span className='font-bold'>Professional:</span>
						<span className='px-2'>|</span> Pair-Programming
						<span className='px-2'>|</span> Teamwork
						<span className='px-2'>|</span> Mentoring
					</p>
				</div>
				<h5 className='text-center underline text-[18px] py-4'>EXPERIENCE</h5>
				{/* Experience */}
				<div className='py-6'>
					<p>
						<span className='font-bold'>Microverse</span>
						<span className='px-2'>|</span> Remote
					</p>
					<p className='py-1 italic'>Mentor (Volunteer) (Feb 2022 - Present)</p>
					<ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
						<li>
							Mentored junior web developers, providing technical support
							through code reviews.
						</li>
						<li>
							Proposed improvements to code organization to improve code quality
							and overall performance.
						</li>
						<li>
							Provided advice and tips on maintaining motivation to maintain
							longevity in the program.
						</li>
					</ul>
				</div>
				{/* Personal Experience */}
				<div className='py-6'>
					<p>
						<span className='font-bold'>MELES ZENAWI FOUNDATION</span>
						<span className='px-2'>|</span>Addis Ababa, Ethiopia
					</p>
					<p className='py-1'>Course Instructor (Jul 2018 - Aug 2019)</p>
					<ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
						<li>
							Instructed high school students about algorithms and computer
							science.
						</li>
						<li>
							Created awareness about computer programing, and built good
							teamwork and communication skills.
						</li>
						<li>
							Helped students build simple programming challenges, which
							improved my problem-solving skills.
						</li>
					</ul>
				</div>
				{/*  */}

				{/* Education  */}
				<h5 className='text-center underline text-[18px] py-4'>EDUCATION</h5>
				{/* Experience */}
				<div className='py-6'>
					<p>
						<span className='font-bold'>Microverse</span>
						<span className='px-2'>|</span> Remote
					</p>
					<p className='py-1'>
						Remote Full-stack Web Development Program, Full Time (Jan 2022 - Sep
						2022)
					</p>
					<ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
						<li>
							Spent 1300+ hours mastering algorithms, data structures, and
							full-stack development while simultaneously developing projects
							with Ruby, Rails, JavaScript, React, and Redux.
						</li>
						<li>
							Developed skills in remote pair-programming using GitHub,
							industry-standard git-flow, and daily standups to communicate and
							collaborate with international remote developers.
						</li>
						<li>
							Provided advice and tips on maintaining motivation to maintain
							longevity in the program.
						</li>
					</ul>
				</div>
				<div className='py-6'>
					<p>
						<span className='font-bold'>Addis Ababa University</span>
						<span className='px-2'>|</span> Remote
					</p>
					<p className='py-1'>
						BSc, Electrical and Computer Engineering (Sep 2015 - Dec 2020)
					</p>
					<ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
						<li>
							Took structural programming C++, OOP , data structures and
							algorithms, and software engineering courses.
						</li>
						<li>GPA 3.08 out of 4.0.</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default resume;
