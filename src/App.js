import React from 'react'
import MoviesContainer from './components/MoviesContainer'
import {Typography, Container} from '@material-ui/core';
const App = (props) => {
  return (
    <Container>
      <Typography variant="h3" align="center" >Movie List App</Typography>
      <MoviesContainer/>
    </Container>
  );
};

export default App;