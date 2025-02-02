import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Products = () => {
  const jwtTokenVariable = Cookies.get('jwt_token')
  if (jwtTokenVariable === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="product-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="product-image"
        />
      </div>
    </>
  )
}
export default Products
