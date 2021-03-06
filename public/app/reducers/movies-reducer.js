const movies = (state = {}, action) => {
  switch (action.type) {
    case 'POPULAR_MOVIES':
      return Object.assign({}, state, { popularMovies: action.payload.results })
    case 'SEARCHED_MOVIE':
      return Object.assign({}, state, { searchedMovies: action.payload.results })
    case 'ADD_FAVE':
      const favorites = [action.movie, ...state.favorites]
      return Object.assign({}, state, { favorites })
    case 'DELETE_FAVE':
      const filteredFavorites = state.favorites.filter((favorite) => {
        return favorite.id !== action.movie.id
      })
      return Object.assign({}, state, { favorites: filteredFavorites });
    default:
      return state
  }
}

export default movies
