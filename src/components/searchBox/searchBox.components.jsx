import React from 'react'
import './searchBox.styles.css';

export  const SearchBox=({placeHolder,handleChange})=>{
    return(
    <input type='search' 
    placeholder={placeHolder}
    onChange={handleChange}
    className='search' /> 
    );
}