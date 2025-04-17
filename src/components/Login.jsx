import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
      })

      const token = response.data.token
      localStorage.setItem('token', token)
      setError(null)
      navigate('/') // redirect to product listing or Home page
    } catch (err) {
      console.error(err)
      setError('Invalid username and password!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='login-page'>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type='text'
          placeholder='Username: johnd'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password: m38rmF$'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login
