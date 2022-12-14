import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tibebImg from '../public/assets/projects/tibeb.png';
import covid19Img from '../public/assets/projects/covid19.gif';
import spacetravelersImg from '../public/assets/projects/spacetravelers.png';
import bookstoreImg from '../public/assets/projects/bookstore.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			<div className='max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
					Projects
				</p>
				<h2 className='py-4'>What I&apos;ve Built</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title='Tibebe Frontend Bootcamp'
						backgroundImg={tibebImg}
						projectUrl='/tibeb'
						tech='React JS'
					/>
					<ProjectItem
						title='Covid19 Statistics App'
						backgroundImg={covid19Img}
						projectUrl='/covid19'
						tech='React JS'
					/>
					<ProjectItem
						title="Space Travelers' Hub"
						backgroundImg={spacetravelersImg}
						projectUrl='/spacetravelers'
						tech='React JS'
					/>
					<ProjectItem
						title='Bookstore CMS'
						backgroundImg={bookstoreImg}
						projectUrl='/bookstore'
						tech='Next JS'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
