import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.css';

// TODO render your app here
import {
    searchMovieByName,
    searchPopularMovies,
    searchUpcomingMovies,
    searchTopRatedMovies,
} from '../api/movie-searchs';
import { refreshDOMData, checkClickedInput } from '../api/utils';

export {
    searchMovieByName,
    searchPopularMovies,
    searchUpcomingMovies,
    searchTopRatedMovies,
    refreshDOMData,
    checkClickedInput,
};
