function Main() {
	return (
		<>
			<div>
				<div
					id='main'
					className='bg-hero-image bg-no-repeat bg-bottom bg-cover lg:h-[99vh] md:h-[98vh] sm:h-[95vh] w-full'
				>
					<div className='flex md:justify-center sm:justify-center items-end h-full'>
						<div className='glass-effect z-0 lg:w-[40%] md:w-[87.5%] md:m-auto sm:w-[89%] sm:m-auto px-8 py-6 uppercase flex flex-col justify-center items-center text-off-white text-center tracking-wider'>
							<h1 className='lg:text-7xl md:text-3xl sm:text-2xl font-extrabold'>
								Interior in your house
							</h1>
							<br />
							<p>Choose something new for yourself</p>
							<br />
							<a
								href='#gallery'
								className='bg-grey w-1/3 p-3 hover:scale-105 delay-75 duration-100 uppercase'
							>
								More
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Main
