import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const usePopularMovies = () => {
    // Fetch data from TMDB API and update store

    const popularMovies = useSelector((store) => store.movies.popularMovies);

    const dispatch = useDispatch();
    const getPopularMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
  
    useEffect(() => {
     !popularMovies && getPopularMovies();
    }, []);
}

export default usePopularMovies;


