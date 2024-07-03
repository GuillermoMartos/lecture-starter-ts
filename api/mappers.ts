import { APISuccessMovieResponse, FilteredAPIResponseResult, APISuccessMovieDetailsResponse } from './types';

export function successAPIDataResultsMapper(data: APISuccessMovieResponse): FilteredAPIResponseResult[] {
    const filteredObjectResponse: FilteredAPIResponseResult[] = [];
    data.results.forEach((result) => {
        const { overview, poster_path: posterPath, id, release_date: releaseDate, title } = result;
        filteredObjectResponse.push({
            overview,
            posterPath,
            id,
            releaseDate,
            title,
        });
    });
    return filteredObjectResponse;
}

export function successAPIDataDetailsMovieResultsMapper(
    data: APISuccessMovieDetailsResponse
): FilteredAPIResponseResult {
    const { overview, poster_path: posterPath, id, release_date: releaseDate, title } = data;
    return { overview, posterPath, id, releaseDate, title };
}
