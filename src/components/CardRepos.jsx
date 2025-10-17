import star from '../assets/star.svg'
import nesting from '../assets/nesting.svg'
import chield from '../assets/chield.svg'

export const CardRepos = ({name, description, stars, forks, updated, license}) => {
    
  return (
    <div className="repo-card">
        <h3>{name}</h3>
        <p>{description || 'Sin descripción'}</p>
        <div className="repo-info">
            <img src={chield} alt="" />
            <span>{license || '--'}</span>

            <img src={star} alt="" />
            <span> {stars} </span>

            <img src={nesting} alt="" />
            <span> {forks} </span>

            <span>{updated}</span>
        </div>
    </div>
  )
}
