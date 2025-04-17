import React, { useContext } from 'react'
import { CartItem } from '../components/CartItem'
import { productContext } from '../context/ProductContext'

const Cart = () => {
  const { cartItems, items, isLoading, isError } = useContext(productContext)

  if (!Array.isArray(cartItems) || cartItems.length === 0) return null

  const detailedCartItems = cartItems.map(({ productId, quantity }) => {
    const product = items.find(item => item.id === productId)
    return {
      ...product,
      quantity
    }
  })

  return isLoading ? (
    <h1 style={{ textAlign: 'center', marginTop: '120px' }}>Loading...</h1>
  ) : isError ? (
    <h1 style={{ textAlign: 'center', marginTop: '120px' }}>{isError}</h1>
  ) : (
    <div className='cart-container'>
      <h2>Items in Your Cart</h2>
      <div className='cart-items-container'>
        <div className='cart-header cart-item-container'>
          <div className='cart-item'>Item</div>
          <div className='item-price'>Price</div>
          <div className='quantity'>Quantity</div>
          <div className='total'>Total</div>
        </div>
        {detailedCartItems.map(
          ({ id, title, rating, price, image, quantity }) => (
            <CartItem
              key={id}
              productId={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating.rate}
            />
          )
        )}
        <div className='cart-header cart-item-container'>
          <div></div>
          <div></div>
          <div></div>
          <div className='total'>
            $
            {detailedCartItems
              .reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.quantity * currentItem.price,
                0
              )
              .toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
