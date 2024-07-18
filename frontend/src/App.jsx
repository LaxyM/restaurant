import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

export const App = () => {
	const [showLogin, setShowLogin] = React.useState(false)

	return (
		<>
			{showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
			<header className='main-header'>
				<div className='navbar-container'>
					<Navbar setShowLogin={setShowLogin} />
				</div>
			</header>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/order' element={<PlaceOrder />} />
				</Routes>
			</div>
			<footer className='main-footer'>
				<Footer />
			</footer>
		</>
	)
}

export default App
