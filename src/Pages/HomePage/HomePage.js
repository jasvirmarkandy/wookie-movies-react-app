import React, {useEffect, useState} from 'react';
import {GenreList} from '../components/GenreList/GenreList';
import {Header} from '../components/Header/Header';
import Network from '../../network';

export const HomePage = () => {
    const initialMovieObject = {
        genres: {},
        movies: []
    }
    const [moviesObject, setMovieObject] = useState(initialMovieObject)

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                let response = await Network.getAllMovies()
                let newMoviesObject = {...moviesObject}
    
                // Create the genres that are returned
                for( let movie of response.data.movies){
                    for( let genre of movie.genres){
                        if(moviesObject.genres.hasOwnProperty(genre)){
                            moviesObject.genres[genre].push(movie)
                        }else{
                            moviesObject.genres[genre] = [movie]
                        }
                    }
                }
    
                setMovieObject(newMoviesObject)
            }catch(e){
                console.log(e)
            }
        }
        fetchMovies()
    }, [])

    return (
        <div>
            <Header/>
            {Object.keys(moviesObject.genres).map( genreKey => <GenreList title={genreKey} movies={moviesObject.genres[genreKey]}/>)}
        </div>
    )
}