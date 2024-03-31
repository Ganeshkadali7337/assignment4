import {MdLocationPin} from 'react-icons/md'

import './index.css'

const RecommenedCardItem = props => {
  const {details} = props
  const {cityName, date, distanceKm, eventName, imgUrl, weather} = details
  const index = imgUrl.indexOf('/d/')
  const id = imgUrl.slice(index + 3, imgUrl.length - 5)
  const date1 = new Date(date)
  const year = date1.getFullYear()
  const date2 = date1.getDate()
  const inKm = Math.floor(distanceKm / 100)

  console.log(year, date2)

  return (
    <li className="list-item">
      <img
        loading="lazy"
        className="imgs"
        src={`https://drive.google.com/thumbnail?id=${id}`}
        alt="1"
      />
      <div className="card-content">
        <div>
          <h1 className="heading3">{eventName}</h1>
          <p id="city">
            <MdLocationPin /> {cityName}
          </p>
        </div>
        <div>
          <p id="city">
            March {date2}, {year}
          </p>
          <p id="city">
            {weather}|{inKm} km
          </p>
        </div>
      </div>
    </li>
  )
}

export default RecommenedCardItem
