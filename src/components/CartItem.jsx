import React, { useContext } from 'react'
import { productContext } from '../context/ProductContext'

export const CartItem = ({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity
}) => {
  const { deletItem } = useContext(productContext)
  return (
    <div className='cart-item-container'>
      <div className='cart-item'>
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
          <button
            className='delte'
            style={{
              cursor: 'pointer',
              width: '60px',
              height: '35px',
              marginTop: '10px'
            }}
            onClick={e => {
              e.preventDefault()
              deletItem(productId)
            }}
          >
            delete
          </button>
        </div>
      </div>
      <div className='item-price'>${price}</div>
      <div className='item-quantity'>
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
      <div className='item-total'>${(quantity * price).toFixed(2)}</div>
    </div>
  )
}
