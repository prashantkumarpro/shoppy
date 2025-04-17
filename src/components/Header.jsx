import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import '../styles/Header.css'
import { productContext } from '../context/ProductContext'

const Header = () => {
  const { cartCount } = useContext(productContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <header>
      <nav>
        <div className='left'>
          <div className='logo'>
            <Link to='/'>shoPPY</Link>
          </div>
          <ul>
            <li className='nav_link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav_link'>
              <Link to='/cart'>
                <span
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    left: '8px'
                  }}
                >
                  {cartCount}
                </span>
                <span
                  style={{
                    color: 'black',
                    fontSize: '25px'
                  }}
                >
                  🛒
                </span>{' '}
              </Link>
            </li>
            <li className='nav_link'>
              <h4 onClick={handleLogout}
              style={{
                cursor:'pointer'
              }}>Logout</h4>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
