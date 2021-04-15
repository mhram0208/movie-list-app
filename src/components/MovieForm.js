import React, {useState} from 'react'
import {addMovie} from '../actions/moviesActions'
import {useDispatch} from 'react-redux'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button, makeStyles, TextField, Typography, InputAdornment } from '@material-ui/core'
import MovieIcon from '@material-ui/icons/Movie';
import AddIcon from '@material-ui/icons/Add';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import Box from '@material-ui/core/Box';

const MovieForm = (props) =>{
    const dispatch = useDispatch()
    const [movieName, setmovieName] = useState('')
    const [imdbRanking, setImdbRanking] = useState('')

    const handleMovieChange = (e) =>{
        setmovieName(e.target.value)
    }

    const handleRankingChange = (e) =>{
        setImdbRanking(e.target.value)
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        const movies = {
            id : Number(new Date()),
            movieName : movieName,
            imdbRanking : imdbRanking
        }
        dispatch(addMovie(movies))
        setmovieName('')
        setImdbRanking('')
    }

    return(
        <div>
            <Typography variant='h5'>Add Movie</Typography>
            <form onSubmit={handleFormSubmit} >
            <TextField 
                    margin="normal"
                    color='primary'
                    label='Movie Name'
                    value = {movieName}
                    onChange={handleMovieChange}
                    size='small'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <MovieIcon />
                            </InputAdornment>
                        )
                    }}
                /><br/> 
                <TextField 
                    margin="normal"
                    color='primary'
                    label='IMDB Ranking'
                    value = {imdbRanking}
                    type='number'
                    onChange={handleRankingChange}
                    size='small'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <GradeRoundedIcon />
                            </InputAdornment>
                        )
                    }}
                /> <br/>
                <Button 
                    type='submit' 
                    color='primary' 
                    variant='contained'
                    size='small'
                    startIcon={<AddIcon />}
                > 
                    ADD 
                </Button><br/>
            </form>
        </div>
    )
}

export default MovieForm