import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deleteMovie} from '../actions/moviesActions'
import SearchMovie from './SearchMovie'
import SortMovies from './SortMovies'
import _ from 'lodash'

const MoviesList = (props) =>{
    const dispatch = useDispatch()
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

    //remove movie
    const handleRemove = (id) =>{
        dispatch(deleteMovie(id))
    }

    return(
        <div>
            {movies.length >0 &&
                <>
                    <h2>Movies List</h2>
                    <SearchMovie searchText={searchText} handleSearchChange={handleSearchChange}/>
                    <SortMovies sortBy={sortBy} handleSort={handleSort} />
                </>
            }
            
            {filteredMovies.map((movie) => {
                return (
                    <div key={movie.id}>
                        <h3>{movie.movieName}</h3>
                        <h3>{movie.imdbRanking}</h3>
                        <button onClick={() =>{
                            handleRemove(movie.id)
                        }}>Delete</button>
                    </div>
                )
            })}
            
        </div>
    )
}

export default MoviesList