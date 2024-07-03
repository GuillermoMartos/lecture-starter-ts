export type APIErrorResponse = {
    success: boolean;
    status_code: number;
    status_message: string;
};

export type MovieResultsResponse = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
};

export type APISuccessMovieResponse = {
    page: number;
    results: MovieResultsResponse[];
    total_pages: number;
    total_results: number;
};
