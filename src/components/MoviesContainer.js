import React from 'react'
import MoviesList from './MoviesList'
import MovieForm from './MovieForm'
import MovieStats from './MovieStats'

const MoviesContainer = (props) =>{
    return (
        <div>
            <MoviesList />
            <MovieForm />
            <MovieStats />
        </div>
        
    )
}

export default MoviesContainer