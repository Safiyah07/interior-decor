// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import News from './pages/News'
import Main from './pages/Main';

function App() {
	return (
		<>
			<Navbar className='z-20 relative' />
			<Main />
			<About />
			<Services />
			<News />
			<Contact />

			{/* <Router>
				<Routes>
					<Route
						path='/Gallery'
						element={<Gallery />}
					></Route>
				</Routes>
			</Router> */}
		</>
	)
}

export default App

