import React, { createContext, useEffect, useState } from 'react'
import { fetchAllCarts, fetchAllProducts } from '../api/productAPI'

// create context
export const productContext = createContext(null)

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // fetch all items
  const getProducts = async () => {
    setIsLoading(true)
    try {
      const res = await fetchAllProducts()
      setItems(res.data)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  // fetch all cart items
  const getAllCartProducts = async () => {
    setIsLoading(true)
    try {
      const res = await fetchAllCarts()
      setCartItems(res.data.products)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  // add item to cart
  const addItem = id => {
    const existingItem = cartItems.find(item => item.productId === id)
    let updatedCart
    if (existingItem) {
      updatedCart = cartItems.map(item =>
        item.productId === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    } else {
      updatedCart = [...cartItems, { productId: id, quantity: 1 }]
    }
    setCartItems(updatedCart)
  }

  // total cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  // delete item from the cart
  const deletItem = id => {
    const updatedCart = cartItems.filter(item => item.productId !== id)
    setCartItems([...updatedCart])
  }

  useEffect(() => {
    getProducts()
    getAllCartProducts()
  }, [])

  return (
    <productContext.Provider
      value={{
        isError,
        isLoading,
        items,
        cartItems,
        addItem,
        cartCount,
        deletItem
      }}
    >
      {children}
    </productContext.Provider>
  )
}
