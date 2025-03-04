/* eslint-disable react/prop-types */
import React from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
import { Rate } from 'antd'

const FoodItem = ({ id, name, price, description, image, rate }) => {
	const { cartItems, addToCart, removeFromCart } = React.useContext(StoreContext)

	return (
		<div className='food-item'>
			<div className='food-item-img-container'>
				<img className='food-item-image' src={image} alt='' />
				{!cartItems[id] ? (
					<img
						className='add'
						onClick={() => addToCart(id)}
						src={assets.add_icon_white}
						alt=''
					/>
				) : (
					<div className='food-item-counter'>
						<img
							onClick={() => removeFromCart(id)}
							src={assets.remove_icon_red}
							alt=''
						/>
						<p>{cartItems[id]}</p>
						<img
							onClick={() => addToCart(id)}
							src={assets.add_icon_green}
							alt=''
						/>
					</div>
				)}
			</div>
			<div className='food-item-info'>
				<div className='food-item-name-rating'>
					<div className='food-item-rating-star'>
						<Rate defaultValue={rate} />
					</div>
					<p>{name}</p>
				</div>
				<p className='food-item-description'>{description}</p>
				<p className='food-item-price'>${price}</p>
			</div>
		</div>
	)
}

export default FoodItem
