import { useState, useEffect } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'

function Navbar() {
	const menuItem = [
		{
			id: 1,
			title: 'main',
		},
		{
			id: 2,
			title: 'about',
		},
		{
			id: 3,
			title: 'services',
		},
		{
			id: 4,
			title: 'news',
		},
		{
			id: 5,
			title: 'gallery',
		},
		{
			id: 6,
			title: 'contact',
		},
	]

	const [showMenu, setShowMenu] = useState(true)

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState)
	}

	// navbar background on scroll
	const [navbarBg, setNavbarBg] = useState(false)

	useEffect(() => {
		const changeBg = () => {
			if (window.scrollY >= 95) {
				setNavbarBg(true)
			} else {
				setNavbarBg(false)
			}
		}

		window.addEventListener('scroll', changeBg)

		return () => window.removeEventListener('scroll', changeBg)
	}, [])

	return (
		<>
			<div className='fixed top-0 left-0 right-0 z-10'>
				<div
					className={
						navbarBg ? 'bg-white text-grey' : 'bg-transparent text-off-white'
					}
				>
					<div
						className={
							showMenu
								? 'flex justify-between items-center py-4 tracking-wider'
								: `{
										navbarBg === true
											? 'bg-inherit'
											: 'bg-off-white text-grey border-b-gray-200'
								  } flex justify-between items-center py-4 tracking-wider`
						}
					>
						<h1 className='lg:text-3xl md:text-2xl sm:text-2xl font-bold lg:ml-[6.2rem] md:ml-10 sm:ml-4 cursor-pointer'>
							<a href='#main'>Interior</a>
						</h1>

						<div className=''>
							<ul className='flex gap-10 text-lg lg:mr-60 md:hidden sm:hidden'>
								{menuItem.map((menu) => (
									<li
										key={menu.id}
										className='capitalize hover:scale-110 delay-75 duration-100'
									>
										<a
											href={`#${menu.title}`}
											className='capitalize hover:scale-110 delay-75 duration-100'
										>
											{menu.title}
										</a>
									</li>
								))}
							</ul>

							<div
								className='md:mr-10 sm:mr-4 cursor-pointer lg:hidden'
								onClick={menuDisplay}
							>
								{showMenu ? <IoMenu size={30} /> : <IoClose size={30} />}
							</div>
						</div>
					</div>

					<ul
						onClick={menuDisplay}
						className={
							showMenu
								? 'hidden'
								: `{
										navbarBg === true
											? 'bg-inherit'
											: 'bg-off-white text-grey border-b-gray-200'
								  } transition ease-in-out delay-150 duration-300 lg:hidden`
						}
					>
						{menuItem.map((menu) => (
							<a
								key={menu.id}
								href={`#${menu.title}`}
							>
								<li className='md:px-10 sm:px-4 py-4 capitalize border border-b-gray-100 border-t-gray-100'>
									{menu.title}
								</li>
							</a>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Navbar
