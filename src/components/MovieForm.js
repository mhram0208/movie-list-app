import React, {useState} from 'react'
import {addMovie} from '../actions/moviesActions'
import {useDispatch} from 'react-redux'
import { Button, TextField, Input } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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
            <h2>Add Movie</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter Movie Name" value={movieName} onChange={handleMovieChange}/><br/>
                <input type="text" placeholder="IMDB Ranking" value={imdbRanking} onChange={handleRankingChange}/><br/>
                <Input 
                    type="text"
                    className="formControl"
                    label="Enter Movie Name"
                    size="small"
                    variant="outlined" 
                /><br/>
                <Button 
                    type='submit' 
                    variant="contained" 
                    color="primary" 
                    startIcon={<AddCircleOutlineIcon />}
                >
                    Add
                </Button>
                {/* <button type="submit">Add</button> */}
            </form>
        </div>
    )
}

export default MovieForm