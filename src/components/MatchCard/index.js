import './index.css'

const MatchCard = props => {
  const {details} = props
  const competingTeam = details.competing_team
  return (
    <li className="match-card">
      <img
        className="log"
        src={details.competing_team_logo}
        alt={`competing team ${competingTeam}`}
      />
      <p>{details.competing_team}</p>
      <p>{details.result}</p>
      <p className={details.match_status === 'Won' ? 'won' : 'lost'}>
        {details.match_status}
      </p>
    </li>
  )
}

export default MatchCard
