export const authorizationHeader = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjUwODBkNjRjMGM4MjU0MmYzZmRlZDQwNDEzMWFmZiIsIm5iZiI6MTcxOTkzODI4Ni44NDgzNjMsInN1YiI6IjYyMGQ5Yzg2YmVmZDkxMDAxZTNmNDQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ojxxCsDhkCTs639_4bNS00CWhmKQy3HuGV0E5a4Apgc',
};

export enum UrlsMap {
    GET_MOVIE_BY_NAME = 'https://api.themoviedb.org/3/search/movie?query={REPLACE_QUERY}&include_adult=false&language=en-US&page={REPLACE_PAGE}',
    GET_POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page={REPLACE_PAGE}',
    GET_UPCOMING_MOVIES = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page={REPLACE_PAGE}',
    GET_TOP_RATED_MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page={REPLACE_PAGE}',
}

export enum OverwriteAPIResponse {
    NO_DESCRPTION_MESSAGGE = 'No description availabe.',
    NO_POSTER_AVAILABLE = '/favicon.png',
}
