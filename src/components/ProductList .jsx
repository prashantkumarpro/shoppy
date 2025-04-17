import React, { useContext } from 'react'
import { productContext } from '../context/ProductContext'

const ProductList = ({ productId, title, rating, price, imageUrl }) => {
  const { addItem } = useContext(productContext)

  return (
    <div className='product'>
      <div className='product-image'>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='title-container'>
        <h3>
          <a href='#'>{title}</a>
        </h3>
      </div>
      <div className='price-rating-container'>
        <p className='rating'>{+rating} ★ ★ ★ ★</p>
        <p className='price'>${price}</p>
      </div>
      <div className='cta-container'>
        <button
          onClick={e => {
            e.preventDefault()
            addItem(productId)
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductList
