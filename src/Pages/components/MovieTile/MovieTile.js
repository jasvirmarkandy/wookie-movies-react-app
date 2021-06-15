import React, {useEffect, useState} from 'react';
import './styles.css';
import { useHistory } from "react-router-dom";

export const MovieTile = (props) => {
    let history = useHistory();
    const { movie } = props;

    const handleClick = () => {
        history.push({
            pathname: `/${props.movie.slug}`,
            state: movie
        })
    }

    return (
        <div onClick={handleClick}>
            <h1>{props.title}</h1>
            <div className="movie-tile">
                <img className="movie-img" src={movie.backdrop}/>
                <h3>{movie.title}</h3>
            </div>
        </div>
    )
}