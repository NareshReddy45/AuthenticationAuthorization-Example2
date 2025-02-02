import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Cart = () => {
  const jwtTokenValue = Cookies.get('jwt_token')
  if (jwtTokenValue === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-image"
        />
      </div>
    </>
  )
}
export default Cart
