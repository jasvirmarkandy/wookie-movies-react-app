import React, {useEffect, useState} from 'react';
import './styles.css';
import SearchBar from '../Search/SearchBar';

export const Header = (props) => {

    return (
        <div className="header">
            <h1 className="title">Wookie Movies</h1>
            <SearchBar {...props}/>
        </div>
    )
}