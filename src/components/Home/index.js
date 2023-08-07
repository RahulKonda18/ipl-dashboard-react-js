import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teams: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const {teams} = data
    console.log(teams)
    const formattedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    console.log(formattedData)
    this.setState({isLoading: false, teams: formattedData})
  }

  render() {
    const {isLoading, teams} = this.state
    return (
      <div className="bg">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="top-heading">
              <img
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="teams-container">
              {teams.map(each => (
                <TeamCard key={each.id} details={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
