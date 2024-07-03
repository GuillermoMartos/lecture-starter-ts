import { APISuccessMovieResponse, APIErrorResponse, MovieResultsResponse } from './types';
import { UrlsMap, authorizationHeader } from './constants';

enum Methods {
    GET = 'GET',
}

function isAPIErrorResponse(data: APIErrorResponse | APISuccessMovieResponse): data is APIErrorResponse {
    return 'status_message' in data;
}

export async function searchMovieByName(queryParam: string): Promise<MovieResultsResponse[]> {
    const transformedURLQuery = UrlsMap.GET_MOVIE_BY_NAME.replace('{REPLACE_QUERY}', queryParam);
    const response = await fetch(transformedURLQuery, {
        headers: { ...authorizationHeader },
        method: Methods.GET,
    });
    const data: APIErrorResponse | APISuccessMovieResponse = await response.json();
    if (isAPIErrorResponse(data)) {
        throw new Error(JSON.stringify(data));
    }

    console.log('la data loca1', data);
    return data.results;
}

export const searchPopularMovies = async (): Promise<MovieResultsResponse[]> => {
    const response = await fetch(UrlsMap.GET_POPULAR_MOVIES, {
        headers: { ...authorizationHeader },
        method: Methods.GET,
    });
    const data: APIErrorResponse | APISuccessMovieResponse = await response.json();
    if (isAPIErrorResponse(data)) {
        throw new Error(JSON.stringify(data));
    }

    return data.results;
};

export const searchUpcomingMovies = async (): Promise<MovieResultsResponse[]> => {
    const response = await fetch(UrlsMap.GET_UPCOMING_MOVIES, {
        headers: { ...authorizationHeader },
        method: Methods.GET,
    });
    const data: APIErrorResponse | APISuccessMovieResponse = await response.json();
    if (isAPIErrorResponse(data)) {
        throw new Error(JSON.stringify(data));
    }

    return data.results;
};

export const searchTopRatedMovies = async (): Promise<MovieResultsResponse[]> => {
    const response = await fetch(UrlsMap.GET_TOP_RATED_MOVIES, {
        headers: { ...authorizationHeader },
        method: Methods.GET,
    });
    const data: APIErrorResponse | APISuccessMovieResponse = await response.json();
    if (isAPIErrorResponse(data)) {
        throw new Error(JSON.stringify(data));
    }

    return data.results;
};
