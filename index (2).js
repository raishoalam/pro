import {useState, useEffect} from 'react'
import axios from 'axios'

import './index.css'

import {IoIosContact} from 'react-icons/io'
import {HiMiniArrowUpTray} from 'react-icons/hi2'
import {FaShoppingBag} from 'react-icons/fa'
import {CiBookmark, CiSearch} from 'react-icons/ci'

import {FaIndianRupeeSign} from 'react-icons/fa6'

const ReviewsCarousel = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setReviews(response.data)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    fetchReviews()
  }, [])

  return (
    <div className="review-container">
      <div className="header-section">
        <h3 className="header-heading">TANN TRIM </h3>
        <div className="header-icons">
          <h1>
            <CiSearch className="head-icon" />
            <IoIosContact className="head-icon" />
            <CiBookmark className="head-icon" />
            <FaShoppingBag className="head-icon" />
          </h1>
        </div>
      </div>
      <div className="header-menu">
        <h3 className="menu">Bags</h3>
        <h3 className="menu">Travel</h3>
        <h3 className="menu">Accessories</h3>
        <h3 className="menu">Gifting</h3>
        <h3 className="menu">Jewelery</h3>
      </div>

      <div className="heading-section">
        <h2 className="review-heading">Bags backpacks</h2>
        <h2 className="review-heading">
          13 Products <HiMiniArrowUpTray />
        </h2>
      </div>

      <ul>
        <div className="card-wrappers">
          {reviews.map(review => (
            <li key={review.id}>
              <div className="review-card">
                {/* Display image */}
                <div className="card-image">
                  <div className="bookmark">
                    <CiBookmark className="book-icons" />
                  </div>
                  <img
                    src={review.image}
                    alt={`Review for product ${review.id}`}
                    className="review-image"
                  />
                </div>
                <br />
                <span className="review-para">{review.title}</span>
                <br />
                <div className="card-footer">
                  <div className="icons">
                    <FaIndianRupeeSign className="price-icons" />
                    <span className="review-price">{review.price}</span>
                  </div>
                  <FaShoppingBag className="bag-icons" />
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default ReviewsCarousel
