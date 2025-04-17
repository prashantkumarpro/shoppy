import React from 'react'
import Header from './components/Header'
import { Navigate, Outlet } from 'react-router'

const Root = () => {
  const token = localStorage.getItem('token')
  return token ? (
    <div>
      <Header />
      <Outlet />
    </div>
  ) : (
    <Navigate to='/login' />
  )
}

export default Root
