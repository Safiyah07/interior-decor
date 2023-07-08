import heroImage from '../assets/about-image.jpg'
import gallery3 from '../assets/gallery3.jpg'
import servicesImage from '../assets/services-image.jpg'
import servicesImage2 from '../assets/services-image2.jpg'
import servicesImage3 from '../assets/services-image3.jpg'

function Gallery() {
	return (
		<>
			<div
				className='pt-24 md:px-8'
				id='gallery'
			>
				<div className='text-center font-bold'>
					<h1 className='text-xl tracking-wider'>Gallery</h1>
					<p className='text-grey'>Some Images</p>
				</div>
				<br />

				<div className='flex w-[83.5%] m-auto gap-7 md:hidden sm:hidden'>
					<div className=''>
						<img
							src={servicesImage}
							alt='Service Img'
							className='lg:h-[15vw]'
						/>
					</div>
					<div className=''>
						<img
							src={heroImage}
							alt='Hero Img'
							className='lg:h-[15vw]'
						/>
					</div>
					<div className=''>
						<img
							src={servicesImage2}
							alt='Service Img2'
							className='lg:h-[15vw]'
						/>
					</div>
					<div className=''>
						<img
							src={gallery3}
							alt='Gallery3 Image'
							className='lg:h-[15vw]'
						/>
					</div>
					<div className=''>
						<img
							src={servicesImage3}
							alt='Third Service Img'
							className='lg:h-[15vw]'
						/>
					</div>
				</div>
				<br />
				<div className='flex lg:w-[83.5%] m-auto gap-7 md:flex-wrap sm:flex-wrap'>
					<div className=''>
						<img
							src={servicesImage3}
							alt='Third Service Img'
							className='lg:h-[15vw]'
						/>
					</div>
					<div className=''>
						<img
							src={servicesImage}
							alt='Service Img'
							className='lg:h-[15vw]'
						/>
					</div>
					<div className=''>
						<img
							src={heroImage}
							alt='Hero Img'
							className='lg:h-[15vw]'
						/>
					</div>
					<div className='sm:hidden md:hidden'>
						<img
							src={servicesImage2}
							alt='Service Img2'
							className='lg:h-[15vw]'
						/>
					</div>
				</div>

				<br />

				<div className='flex justify-center'>
					<a
						href='#services'
						className='bg-grey text-off-white uppercase lg:w-[20%] md:w-[30%] sm:w-[35%] p-3 hover:scale-105 delay-75 duration-100 flex justify-center'
					>
						See More
					</a>
				</div>
			</div>
		</>
	)
}

export default Gallery
