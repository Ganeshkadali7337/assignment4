import {FaArrowRightLong} from 'react-icons/fa6'

import Recommended from '../Recommended/index'

import Upcoming from '../Upcoming'

import './index.css'

const Banner = () => (
  <div className="container1">
    <img
      className="img"
      src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1711876551/Banner_p9sdsm.jpg"
      alt="banner"
    />
    <img
      className="img2"
      src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1711891307/Banner_iiyrmy.jpg"
      alt="banner"
    />
    <div className="content">
      <div className="content1">
        <h1 className="heading2">
          Discover Exciting Events Happening Near You - Stay Tuned for Updates!
        </h1>
        <p id="para">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libera et velit interdum,ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
        </p>
        <h1 className="heading4">
          Recommended Shows <FaArrowRightLong />
        </h1>
      </div>
      <Recommended />
      <h1 className="heading5">
        Upcoming Events <FaArrowRightLong />
      </h1>
      <Upcoming />
    </div>
  </div>
)

export default Banner
