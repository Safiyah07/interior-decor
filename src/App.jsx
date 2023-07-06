import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import About from './pages/About'
import Services from './pages/Services'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
	return (
		<>
			<Navbar className='z-20 relative' />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
			>
				<Main />
			</motion.div>
			{/* <motion.div
				initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<About />
			</motion.div> */}
			<motion.div
				initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<About />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<Services />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<News />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<Gallery />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<Contact />
			</motion.div>
		</>
	)
}

export default App
