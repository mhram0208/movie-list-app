import React from 'react'
import MoviesList from './MoviesList'
import MovieForm from './MovieForm'
import MovieStats from './MovieStats'
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

const MoviesContainer = (props) =>{
    return (
        <Container>
            <Grid container>
                <Grid item md={9}>
                    <MoviesList />
                </Grid>
                <Grid item md={3}>
                    <MovieForm />
                    <MovieStats />
                </Grid>
            </Grid>
        </Container>
        
        
    )
}

export default MoviesContainer