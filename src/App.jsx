import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './components/Login'
import Root from './Root'
import './App.css'
import Cart from './pages/Cart'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route element={<Root />}>
            <Route index element={<Home />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
