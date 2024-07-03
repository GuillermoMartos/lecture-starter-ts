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

type ExtraDetailsMovieResultsAPIData = {
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    imdb_id: string;
    origin_country: [string, string];
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
};

export type APISuccessMovieDetailsResponse = MovieResultsResponse & ExtraDetailsMovieResultsAPIData;

export type FilteredAPIResponseResult = {
    releaseDate: string;
    title: string;
    id: number;
    posterPath: string | null;
    overview: string;
};
