import React from 'react'

import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
	return (
		<div className='footer' id='footer'>
			<div className='footer-content'>
				<div className='footer-content-left'>
					<img src={assets.logo} alt='' />
					<p>
						Discover a world of flavors with our food delivery! Fresh
						ingredients, exquisite dishes, and fast delivery – enjoy
						restaurant-quality meals right at home. Order now and taste the
						difference!
					</p>
					<div className='footer-social-icons'>
						<img src={assets.facebook_icon} alt='' />
						<img src={assets.twitter_icon} alt='' />
						<img src={assets.linkedin_icon} alt='' />
					</div>
				</div>
				<div className='footer-content-center'>
					<h2>COMPANY</h2>
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li>Privacy policy</li>
					</ul>
				</div>
				<div className='footer-content-right'>
					<h2>GET IN TOUCH</h2>
					<ul>
						<li>+1-212-453-7854</li>
						<li>contact@gmail.com</li>
					</ul>
				</div>
			</div>
			<hr />
			<p className='footer-copyright'>2024 © Copyright - All Right Reserved</p>
		</div>
	)
}

export default Footer
