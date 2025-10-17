
export const Profile = ({ user }) => {
    return (
        <div className="profile">
            <div className='user-header'>
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className='avatar'
                />
                <div className='user-info'>
                    <p className="items">Seguidores <b>{user.followers}</b></p>
                    <p className="items">Seguidos <b>{user.following}</b></p>
                    <p className="items">Ubicación <b>{user.location || 'no disponible'}</b></p>
                </div>
            </div>
            <div className="user-bio">
                <h2>{user.name || user.login}</h2>
                <p>{user.bio || "Sin biografía"}</p>
            </div>
        </div>
    )
}
