import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import SearchMovie from './SearchMovie'
import SortMovies from './SortMovies'
import MovieCard from './MovieCard'
import _ from 'lodash'
import { Grid, Container } from '@material-ui/core';

const MoviesList = (props) =>{
    const movies = useSelector(state => state.movies)
    const [filteredMovies, setFilteredMovies] = useState([])
    const [searchText, setSearchText] = useState('')
    const [sortBy, setSortBy] = useState('')

    //sets filteredMovies once movies is loaded
    useEffect(()=>{
        setFilteredMovies(movies)
    },[movies])

    //function which handle searchText and sets filteredMovies
    const handleSearchChange = (e) =>{
        setSearchText(e.target.value)
        const newMovies = movies.filter(movie => movie.movieName.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredMovies(newMovies)
        sort(sortBy)
    }

    //function which handles sort and sets filteredMovies
    const handleSort = (e) =>{
        setSortBy(e.target.value)
        const sortedMovies = sort(e.target.value)
        setFilteredMovies(sortedMovies)
    }

    //sort functionality using loadash
    const sort = (sortBy) =>{
       switch(sortBy){
            case 'movieASC' : {
                return _.sortBy(movies,'movieName') // A -z
            }
            case 'movieDSC' : {
                return _.sortBy(movies,'movieName').reverse() // Z -A
            }
            case 'rankingASC' : {
                return _.sortBy(movies,'imdbRanking') //
            }
            case 'rankingDSC' : {
                return _.sortBy(movies,'imdbRanking').reverse() // 
            }
            default :return _.sortBy(movies,'id')
            
       }
    }

    return(
        <Container>
            {movies.length >0 &&
                <>
                    <Grid container direction="row" spacing ={3}>
                        <Grid item>
                            <SearchMovie searchText={searchText} handleSearchChange={handleSearchChange}/>
                        </Grid>
                        <Grid item>
                            <SortMovies sortBy={sortBy} handleSort={handleSort} />
                        </Grid>
                    </Grid>
                    <Grid container spacing ={3}>
                        {filteredMovies.map((movie) => {
                            return (
                                <Grid item md={4}>
                                    <MovieCard key={movie.id} movie = {movie} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </>
            }
        </Container>
    )
}

export default MoviesList