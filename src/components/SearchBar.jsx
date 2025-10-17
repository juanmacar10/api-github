import { useState } from "react";
import lupa from "../assets/search.svg"

export const SearchBar = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            //cuando presiona enter se ejecuta la busqueda
            onSearch(username.trim());
        }
    }; 



    return (
        <div className="search-bar">
            <div className="search-container">
                <img src={lupa} alt="lupa" className="icon" />
                <input
                    className="search-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </div>
    )
}
