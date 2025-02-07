import React from 'react'
import './CardTwo.css'

const Card2 = (props) => {
  const {imgURL,title, description,price, rating}= props;
  return (
    <>
    <div className="food-card">
    <img src={imgURL} alt="" className='food-img'/>
    <div className="food-details">
        <h3 className="food-title">{title}</h3>
        <p className="food-description">{description}</p>
        <div className="food-price-rating">
            <span className="price">{price}</span>
            <span className="rating">⭐{rating} </span>
        </div>
        <button className="order-btn">Add to Cart</button>
    </div>
</div>
</>
  )
}


export default Card2