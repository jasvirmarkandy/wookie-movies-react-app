import React, { useState, useEffect } from 'react';
import Network from '../../../network';
import { useHistory } from "react-router-dom";
import './styles.css'

const SearchResult = ({movie}) => {
    let history = useHistory();

    const handleSearchClick = () => {
        history.push({
            pathname: `/${movie.slug}`,
            state: movie
        })
    }

    return (
        <div className="search-item" onClick={handleSearchClick}>
            <h3>{movie.title}</h3>
        </div>
    )
}
  
const SearchBar = (props) => {
    const [results, setResults] = useState([])

    const handleChange = async (e) => {
        try{
            let response = await Network.searchMovie(e.target.value)
            setResults(response.data.movies)
        }catch(e){
            console.log(e)
        }
    }
    
    return (
        <div>
            Search
            <input onChange={handleChange}/>
            <div className="search-results">
                { results.map(result => <SearchResult movie={result}>{result.title}</SearchResult>)}
            </div>
        </div>
    );
}


export default SearchBar
  