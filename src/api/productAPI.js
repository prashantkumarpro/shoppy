import axios from 'axios'
const BASE_URL = 'https://fakestoreapi.com'

export const fetchAllProducts = async () => {
  const res = await axios.get(`${BASE_URL}/products`)
  return res
}

export const fetchProductById = async id => {
  const res = await axios.get(`${BASE_URL}/products/${id}`)
  return res
}

export const fetchAllCarts = async () => {
  const res = await axios.get(`${BASE_URL}/carts/6`)
  return res
}
