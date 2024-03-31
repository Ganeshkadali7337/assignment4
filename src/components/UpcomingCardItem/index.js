import {MdLocationPin} from 'react-icons/md'

import './index.css'

const UpcomingCardItem = props => {
  const {details} = props
  const {cityName, date, distanceKm, eventName, imgUrl, weather} = details
  const index = imgUrl.indexOf('/d/')
  const id = imgUrl.slice(index + 3, imgUrl.length - 5)
  const date1 = new Date(date)
  const year = date1.getFullYear()
  const date2 = date1.getDate()
  const inKm = Math.floor(distanceKm / 100)

  // console.log(year, date2)

  return (
    <li className="list-item2">
      <div>
        <img
          loading="lazy"
          className="imgs2"
          src={`https://drive.google.com/thumbnail?id=${id}`}
          alt="1"
        />
      </div>
      <p className="city2">
        March {date2}, {year}
      </p>
      <div className="container5">
        <div>
          <h1 className="heading4">{eventName}</h1>
          <p className="city4">
            <MdLocationPin /> {cityName}
          </p>
        </div>
        <p className="city4">
          {weather}|{inKm} km
        </p>
      </div>
    </li>
  )
}

export default UpcomingCardItem
