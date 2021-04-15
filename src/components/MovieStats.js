import React from 'react'
import {useSelector} from 'react-redux'
const MovieStats = (props) =>{
   const movies = useSelector(state => state.movies)
    const minRanking = Math.min(...movies.map((movie) =>{
       return movie.imdbRanking
   }))
   
   const minRankingMovie = movies.find((movie) =>{
       return movie.imdbRanking == minRanking
   })

    return(
        <div>
            <h2>MovieStats</h2>
            <h3>Total Movies - {movies.length} </h3>
            {minRankingMovie && 
                <>
                    <h4>Top Ranked Movie - {minRankingMovie.movieName}</h4>
                    <h4>IMDB Ranking - {minRankingMovie.imdbRanking}</h4>
                </>
            }
        </div>
    )
}

export default MovieStats