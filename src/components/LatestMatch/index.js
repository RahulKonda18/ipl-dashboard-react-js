import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  return (
    <div className="latest-match-card">
      <div className="row">
        <div className="col">
          <p>{latestMatchDetails.competing_team}</p>
          <p>{latestMatchDetails.date}</p>
          <p>{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.result}</p>
        </div>
        <div className="col">
          <img
            className="logo"
            src={latestMatchDetails.competing_team_logo}
            alt={`latest match ${latestMatchDetails.competing_team}`}
          />
        </div>
      </div>
      <div className="col2">
        <h2>First Innings</h2>
        <p>{latestMatchDetails.first_innings}</p>
        <h2>Second Innings</h2>
        <p>{latestMatchDetails.second_innings}</p>
        <h2>Man of the Match</h2>
        <p>{latestMatchDetails.man_of_the_match}</p>
        <h2>Umpires</h2>
        <p>{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
