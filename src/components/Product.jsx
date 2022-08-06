import React from 'react'
import '../css/Product.css';
import Star from '../assets/star.webp';

function Product({ title, image, price, rating}){
  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                <img src={Star} alt="star"/>
              ))}
            </div>
        </div>

        <img src={image} className="product__image" alt="product image" />

        <button>Add to basket</button>
    </div>
  )
}

export default Product