import React, { useContext } from 'react'
import ProductList from '../components/ProductList '
import { productContext } from '../context/ProductContext'

const Home = () => {
  const { isError, isLoading, items } = useContext(productContext)

  return isLoading ? (
    <h1 style={{ textAlign: 'center', marginTop: '120px' }}>Loading...</h1>
  ) : isError ? (
    <h1 style={{ textAlign: 'center', marginTop: '120px' }}>{'Something went wrong'}</h1>
  ) : (
    <div className='products-container'>
      {items.map(({ id, title, rating, price, image }) => (
        <ProductList
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  )
}

export default Home
