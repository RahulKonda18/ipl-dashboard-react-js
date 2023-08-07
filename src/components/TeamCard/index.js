import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details
  return (
    <>
      <Link to={`/team-matches/${id}`} className="">
        <li className="team-card">
          <img src={teamImageUrl} className="team-logo" alt={name} />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    </>
  )
}

export default TeamCard
