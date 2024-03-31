import {Component} from 'react'

import Loader from 'react-loader-spinner'

import UpcomingCardItem from '../UpcomingCardItem'

import './index.css'

class Upcoming extends Component {
  state = {data: [], loading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming',
    )
    const recoData = await response.json()
    this.setState({data: recoData.events, loading: false})
  }

  render() {
    const {data, loading} = this.state
    console.log(data)
    return (
      <div className="cards2">
        {loading ? (
          <Loader type="ThreeDots" color="white" height="50" width="50" />
        ) : (
          <ul className="reco-list2">
            {data.map(each => (
              <UpcomingCardItem details={each} key={each.eventName} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Upcoming
