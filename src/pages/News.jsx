function News() {
	return (
		<>
			<div
				className='pt-24 lg:pl-28 md:px-8'
				id='news'
			>
				<div className='text-center font-bold'>
					<h1 className='text-xl tracking-wider'>News</h1>
					<p className='text-grey'>Latest Events</p>
				</div>
				<br />

				<div className='grid md:gap-2 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>
					<div className='bg-grey bg-news-image bg-no-repeat bg-bottom bg-cover h-[40vh] w-full lg:pl-10 lg:pr-2'></div>
					
					<br className='lg:hidden' />
					<div className='lg:col-span-2 lg:w-[80%] lg:ml-14 md:text-center sm:text-center'>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
							saepe eveniet atque aperiam minus aliquam ipsam omnis excepturi
							dolore autem magnam unde qui nobis, nam ullam quaerat. Voluptate,
							error voluptatum.
						</p>
						<p className='lg:pt-20 md:pt-12'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
							saepe eveniet atque aperiam minus aliquam ipsam omnis excepturi
							dolore autem magnam unde qui nobis, nam ullam quaerat. Voluptate,
							error voluptatum.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default News
