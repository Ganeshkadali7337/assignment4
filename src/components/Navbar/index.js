import {
  MdLocationPin,
  MdKeyboardArrowRight,
  MdOutlineSearch,
} from 'react-icons/md'

import {FaHeart, FaBars, FaUserAlt} from 'react-icons/fa'

import './index.css'

const Navbar = () => (
  <div>
    <div className="nav-bar display-large">
      <div className="logo-container">
        <h1 className="logo">BookUsNow</h1>
        <p className="location">
          <MdLocationPin /> Mumbai, India <MdKeyboardArrowRight />
        </p>
      </div>
      <div className="container2">
        <div className="search-container1">
          <button type="button" className="category-btn">
            <FaBars />
            Categories
          </button>
          <div className="search">
            <input type="search" />
            <MdOutlineSearch />
          </div>
        </div>
        <ul className="nav-list">
          <li>Live shows</li>
          <li>Streams</li>
          <li>Movies</li>
          <li>Plays</li>
          <li>Events</li>
          <li>Sports</li>
          <li>Activites</li>
        </ul>
      </div>
      <div className="fav-container">
        <p>
          <FaHeart /> Favorites
        </p>
        <button type="button" className="sign-button">
          Sign In
        </button>
      </div>
    </div>
    <div className="display-small">
      <div className="mobile-nav ">
        <div className="logo-container">
          <h1 className="logo">BookUsNow</h1>
          <p className="location">
            <MdLocationPin /> Mumbai, India <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="icons-container">
          <MdOutlineSearch className="icons" />
          <FaHeart className="icons" />
          <FaUserAlt className="icons" />
        </div>
      </div>
      <ul className="nav-list">
        <li>Live shows</li>
        <li>Streams</li>
        <li>Movies</li>
        <li>Plays</li>
        <li>Events</li>
        <li>Sports</li>
        <li>Activites</li>
      </ul>
    </div>
  </div>
)

export default Navbar
