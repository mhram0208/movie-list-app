const moviesInitialState = []
const MoviesReducer = (state=moviesInitialState, action) =>{
    switch(action.type) {
        case 'ADD_MOVIE' : {
            return [...state, {...action.payload}]
        }
        case 'DELETE_MOVIE' : {
            return state.filter((ele) =>{
                if(ele.id !== action.payload){
                    return {...ele}
                }
            })
        }
        default : {
            return [...state] // [].concat(state)
        }
    }
}

export default MoviesReducer