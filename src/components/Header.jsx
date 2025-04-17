import React, { useContext } from 'react'
import { Link } from 'react-router'
import '../styles/Header.css'
import { productContext } from '../context/ProductContext'

const Header = () => {
  const { cartCount } = useContext(productContext)

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
              <Link to='login'>Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
