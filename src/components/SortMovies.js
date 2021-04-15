const SortMovies = (props) =>{
    const {sortBy, handleSort} = props
    return (
        <div>
            <select value={sortBy} onChange={handleSort}>
                <option value=''>None</option>
                <option value='movieASC'>A-Z</option>
                <option value='movieDSC'>Z-A</option>
                <option value='rankingASC'>Ranking -- Low to High</option>
                <option value='rankingDSC'>Ranking -- High to Low</option>
            </select>
        </div>
    )
}

export default SortMovies