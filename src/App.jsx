
import { useEffect, useState } from 'react'
import { SearchBar } from './components/SearchBar';
import { Profile } from './components/Profile';
import { Repos } from './components/Repos';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('moi6-23');


  useEffect(() => {
    const fetchUser = async () => {
      fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) throw new Error('Usuario no encontrado');
        return response.json();
      })
      .then((userData) => {
        console.log(userData);
        setUser(userData);

        return fetch(userData.repos_url)
      })
      .then((reposResponse) => {
        if (!reposResponse.ok) throw new Error('Error al obtener los repositorios');
        return reposResponse.json();
      })
      .then((reposData) => {
        console.log(reposData);
        setRepos(reposData);
      })
      .catch((error) => {
        setError(error.message);
      })

    }
    fetchUser();
  },[username])


  //funcion que recibe el username del input del componente SearchBar
  const handleSearch = (nuevoUsername) => {
    setUsername(nuevoUsername)
  }

  return (
    <div className='app'>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {
        user && 
        <>
        <Profile user={user} />
        <Repos repos={repos} />
        </>
      }
    </div>
  )
}

export default App
