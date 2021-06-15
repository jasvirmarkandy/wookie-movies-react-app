import React, {useEffect, useState} from 'react';
import {MovieTile} from '../../components/MovieTile/MovieTile';
import './styles.css';

export const GenreList = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div className="genre-list">
                { props.movies.map( movie => <MovieTile movie={movie}/>)}
            </div>
        </div>
    )
}