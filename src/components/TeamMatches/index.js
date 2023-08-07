import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, lmd: [], rm: [], tbu: ''}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const formattedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = formattedData
    this.setState({
      isLoading: false,
      lmd: latestMatchDetails,
      rm: recentMatches,
      tbu: teamBannerUrl,
    })
  }

  render() {
    const {isLoading, lmd, rm, tbu} = this.state
    console.log(isLoading, lmd, rm, tbu)
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg">
            <img src={tbu} alt="team banner" className="team-banner" />
            <h1 className="head">Latest Matches</h1>
            <LatestMatch latestMatchDetails={lmd} />
            <ul className="match-cards">
              {rm.map(each => (
                <MatchCard key={each.id} details={each} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
