import {Component} from 'react'

import Loader from 'react-loader-spinner'

import RecommenedCardItem from '../RecommenedCardItem'

import './index.css'

class Recommended extends Component {
  state = {data: [], loading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco',
    )
    const recoData = await response.json()
    this.setState({data: recoData.events, loading: false})
  }

  render() {
    const {data, loading} = this.state
    console.log(data)
    return (
      <div className="cards">
        {loading ? (
          <Loader type="ThreeDots" color="white" height="50" width="50" />
        ) : (
          <ul className="reco-list">
            {data.map(each => (
              <RecommenedCardItem details={each} key={each.eventName} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Recommended
