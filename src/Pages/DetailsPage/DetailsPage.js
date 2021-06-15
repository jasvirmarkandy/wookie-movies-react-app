import React, {useEffect, useState} from 'react';
import './styles.css';
import {Header} from '../components/Header/Header';

export const DetailsPage = (props) => {

    const movie = props.location.state;
    const year = movie.slug.split("-").pop()

    return (
        <div className="details-page-container">
            <Header/>
            <div className="movie-info-container">
                <div >
                    <img src={movie.poster}/>
                </div>
                <div>
                    <div className="title">{`${movie.title} (${movie.imdb_rating})`}</div>
                    <div className="info">{`${[year, movie.length, movie.director].join(" | ")}`}</div>
                    <div className="cast">{`Cast: ${movie.cast.join(", ")}`}</div>
                    <p>{`Movie Description: ${movie.overview}`}</p>
                </div>
            </div>
        </div>
    )
}