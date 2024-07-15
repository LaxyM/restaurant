/* eslint-disable react/prop-types */
import React from 'react'

import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { Badge } from 'antd'

const Navbar = ({ setShowLogin }) => {
	const [menu, setMenu] = React.useState('menu')

	const { getTotalCartCount, getTotalCartAmount } =
		React.useContext(StoreContext)

	return (
		<div className='navbar'>
			<Link to='/'>
				<img src={assets.logo} alt='' className='logo' />
			</Link>
			<ul className='navbar-menu'>
				<Link
					to='/'
					onClick={() => setMenu('home')}
					className={menu === 'home' ? 'active' : ''}
				>
					home
				</Link>
				<a
					href='#explore-menu'
					onClick={() => setMenu('menu')}
					className={menu === 'menu' ? 'active' : ''}
				>
					menu
				</a>
				<a
					href='#app-download'
					onClick={() => setMenu('mobile-app')}
					className={menu === 'mobile-app' ? 'active' : ''}
				>
					mobile-app
				</a>
				<a
					href='#footer'
					onClick={() => setMenu('contact-us')}
					className={menu === 'contact-us' ? 'active' : ''}
				>
					contact us
				</a>
			</ul>
			<div className='navbar-right'>
				<img src={assets.search_icon} alt='' />
				<div className='navbar-search-icon'>
					<Link to='/cart'>
						<Badge count={getTotalCartCount()} showZero color='#CA054D'>
							<img src={assets.basket_icon} alt='' />
						</Badge>
					</Link>
				</div>
				<div className='navbar-search-icon'>
					<Link to='/cart'>
						<Badge
							count={getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
							showZero
							color='#45B69C'
							overflowCount={999}
						>
							<img src={assets.sack_dollar} alt='' />
						</Badge>
					</Link>
				</div>
				<button onClick={() => setShowLogin(true)}>Sign in</button>
			</div>
		</div>
	)
}

export default Navbar
