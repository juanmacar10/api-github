import star from '../assets/star.svg'
import fork from '../assets/nesting.svg'
import licenses from '../assets/chield.svg'

export const CardRepos = ({name, description, stars, forks, updated, license}) => {
    
  return (
    <div className="repo-card">
        <h3>{name}</h3>
        <p>{description || 'Sin descripción'}</p>
        <div className="repo-info">
            <img src={licenses} alt="" />
            <span>{license || '--'}</span>
            <img src={star} alt="" />
            <span> {stars} </span>
            <img src={fork} alt="" />
            <span> {forks} </span>
            <span>{updated}</span>
        </div>
    </div>
  )
}
