import React,{useState} from 'react'

const SearchMovie = (props) =>{
    const {searchText, handleSearchChange} = props
    return (
        <div>
            <input type="text" placeholder="Search Movie" value={searchText} onChange={handleSearchChange}/>
        </div>
    )
}

export default SearchMovie