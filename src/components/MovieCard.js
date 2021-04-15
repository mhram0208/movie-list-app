import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteMovie} from '../actions/moviesActions'
import { Grid, Card, CardHeader, CardContent, IconButton, Typography } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const MovieCard = (props) =>{
    const {movie} = props
    const dispatch = useDispatch()

    //remove movie
    const handleRemove = (id) =>{
        dispatch(deleteMovie(id))
    }

    return(
        <div>
            <Card elevation={3}>
                <CardHeader
                    title={movie.movieName} 
                    action={
                        <IconButton onClick={() => handleRemove(movie.id)}>
                            <DeleteForeverIcon />
                        </IconButton>
                    } 
                />
                <CardContent>
                    <Typography variant='subtitle2'>
                        Ranking - {movie.imdbRanking}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default MovieCard