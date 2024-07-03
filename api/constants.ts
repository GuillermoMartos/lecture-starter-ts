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
    GET_FAVORITE_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/{REPLACE_ID}?language=en-US',
}

export enum OverwriteAPIResponse {
    NO_DESCRPTION_MESSAGGE = 'No description availabe.',
    NO_POSTER_AVAILABLE = '/favicon.png',
    NO_MOVIES_FOUND_DESCRIPTION = 'No more movies found.',
    NO_MOVIES_FOUND_IMAGE = 'https://c0.klipartz.com/pngpicture/61/124/gratis-png-slowpoke-y-slowbro-slowboke-y-slowbro-shellder-pokemon-amarillo-pokemon.png',
}

export const mainCardMovieTemplate = `<div class="col-lg-3 col-md-4 col-12 p-2">
                        <div class="card shadow-sm">
                            <img src="{REPLACE_IMG_SRC}" />
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="red" fill="#ff000078" width="50" height="50"
                                class="bi bi-heart-fill position-absolute p-2" viewBox="0 -2 18 22">
                                <path fill-rule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                            <div class="card-body">
                                <p class="card-text truncate">
                                {REPLACE_DESCRIPTION}
                                </p>
                                <div class="
                                            d-flex
                                            justify-content-between
                                            align-items-center
                                        ">
                                    <small class="text-muted">{REPLACE_RELEASE_DATE}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;

export const favoriteCardTemplate = `<div class="col-12 p-2">
<div class="card shadow-sm">
    <img src="{REPLACE_IMG_SRC}" />
    <svg xmlns="http://www.w3.org/2000/svg" stroke="#2998eb" fill="#2998eb" width="50" height="50"
        class="bi bi-heart-fill position-absolute p-2 frozen-heart" viewBox="0 -2 18 22">
        <path fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
    </svg>
    <div class="card-body">
        <p class="card-text truncate">
        {REPLACE_DESCRIPTION}
        </p>
        <div class="
                        d-flex
                        justify-content-between
                        align-items-center
                    ">
            <small class="text-muted">{REPLACE_RELEASE_DATE}</small>
        </div>
    </div>
</div>
</div>`;
