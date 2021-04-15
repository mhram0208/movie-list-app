import React from 'react'
import {useSelector} from 'react-redux'
import { Card, CardContent, Typography, makeStyles  } from '@material-ui/core'

const useStyle = makeStyles({
    stats: {
        marginTop: 30
    }
})

const MovieStats = (props) =>{
    const classes = useStyle()
    const movies = useSelector(state => state.movies)
    const minRanking = Math.min(...movies.map((movie) =>{
       return movie.imdbRanking
   }))
   
   const minRankingMovie = movies.find((movie) =>{
       return movie.imdbRanking == minRanking
   })

    return(
        <Card className = {classes.stats} elevation={3}> 
            <CardContent>
                <Typography variant='body1'>
                    <strong>Total Movies</strong> - {movies.length} 
                </Typography>
                {
                    (movies.length > 0 && minRankingMovie.movieName && minRankingMovie.imdbRanking) && (
                        <Typography variant='body1'>
                            <strong>Top ranked movie</strong> - {minRankingMovie.movieName} <br/>
                            <strong>Rating</strong> - {minRankingMovie.imdbRanking}
                        </Typography>
                    )
                }
            </CardContent>
        </Card>
    )
}

export default MovieStats