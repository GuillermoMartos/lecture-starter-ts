import { APISuccessMovieResponse, APIErrorResponse, MovieResultsResponse } from './types';
import { UrlsMap, authorizationHeader } from './constants';

enum Methods {
    GET = 'GET',
}

function isAPIErrorResponse(data: APIErrorResponse | APISuccessMovieResponse): data is APIErrorResponse {
    return 'status_message' in data;
}

export async function searchMovieByName(queryParam: string, pageParam = '1'): Promise<MovieResultsResponse[]> {
    let transformedURLQuery = UrlsMap.GET_MOVIE_BY_NAME.replace('{REPLACE_QUERY}', queryParam);
    transformedURLQuery = transformedURLQuery.replace('{REPLACE_PAGE}', pageParam);
    const response = await fetch(transformedURLQuery, {
        headers: { ...authorizationHeader },
        method: Methods.GET,
    });
    const data: APIErrorResponse | APISuccessMovieResponse = await response.json();
    if (isAPIErrorResponse(data)) {
        throw new Error(JSON.stringify(data));
    }

    return data.results;
}

export const searchPopularMovies = async (pageParam = '1'): Promise<MovieResultsResponse[]> => {
    const transformedURLPage = UrlsMap.GET_POPULAR_MOVIES.replace('{REPLACE_PAGE}', pageParam);
    const response = await fetch(transformedURLPage, {
        headers: { ...authorizationHeader },
        method: Methods.GET,
    });
    const data: APIErrorResponse | APISuccessMovieResponse = await response.json();
    if (isAPIErrorResponse(data)) {
        throw new Error(JSON.stringify(data));
    }

    return data.results;
};

export const searchUpcomingMovies = async (pageParam = '1'): Promise<MovieResultsResponse[]> => {
    const transformedURLPage = UrlsMap.GET_UPCOMING_MOVIES.replace('{REPLACE_PAGE}', pageParam);
    const response = await fetch(transformedURLPage, {
        headers: { ...authorizationHeader },
        method: Methods.GET,
    });
    const data: APIErrorResponse | APISuccessMovieResponse = await response.json();
    if (isAPIErrorResponse(data)) {
        throw new Error(JSON.stringify(data));
    }

    return data.results;
};

export const searchTopRatedMovies = async (pageParam = '1'): Promise<MovieResultsResponse[]> => {
    const transformedURLPage = UrlsMap.GET_TOP_RATED_MOVIES.replace('{REPLACE_PAGE}', pageParam);
    const response = await fetch(transformedURLPage, {
        headers: { ...authorizationHeader },
        method: Methods.GET,
    });
    const data: APIErrorResponse | APISuccessMovieResponse = await response.json();
    if (isAPIErrorResponse(data)) {
        throw new Error(JSON.stringify(data));
    }

    return data.results;
};
