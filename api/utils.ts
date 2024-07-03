import { OverwriteAPIResponse, favoriteCardTemplate } from './constants';
import { searchFavoriteMovieDetails } from './movie-searchs';
import { MovieResultsResponse } from './types';

function setLocalStoredFavoriteMovies(movieID: number) {
    const localStoragedMovies = localStorage.getItem('favoriteMovies');
    if (localStoragedMovies) {
        const storedMoviesArray: number[] = JSON.parse(localStoragedMovies);
        if (storedMoviesArray.includes(movieID)) {
            const filteredMoviesArray = storedMoviesArray.filter((num) => num !== movieID);
            localStorage.setItem('favoriteMovies', JSON.stringify(filteredMoviesArray));
            return;
        }
        localStorage.setItem('favoriteMovies', JSON.stringify([...storedMoviesArray, movieID]));
    } else {
        localStorage.setItem('favoriteMovies', JSON.stringify([movieID]));
    }
}

function getRequiredElement<T extends Element>(parent: Element | Document, selector: string): T {
    const element = parent.querySelector<T>(selector);
    if (!element) {
        throw new Error(`Elemento no encontrado: ${selector}`);
    }
    return element;
}

function populateCardImg(posterPath: string | null) {
    return posterPath ? `https://image.tmdb.org/t/p/original/${posterPath}` : OverwriteAPIResponse.NO_POSTER_AVAILABLE;
}

function populateCardDescription(overview: string) {
    return overview === '' ? OverwriteAPIResponse.NO_DESCRPTION_MESSAGGE : overview;
}

function hydrateFavoriteHeartIcon(cardParent: Element, movieFavoriteHeart: HTMLImageElement, movieId: number) {
    const localStoragedMovies = localStorage.getItem('favoriteMovies');
    if (localStoragedMovies && JSON.parse(localStoragedMovies).includes(movieId)) {
        movieFavoriteHeart.setAttribute('fill', 'red');
    }
    movieFavoriteHeart.addEventListener('click', () => {
        const isAlredyLiked = movieFavoriteHeart.getAttribute('fill') === 'red';
        if (!isAlredyLiked) {
            movieFavoriteHeart.setAttribute('fill', 'red');
        } else {
            movieFavoriteHeart.setAttribute('fill', '#ff000078');
        }

        const dataId = cardParent.getAttribute('data-id');
        if (dataId) {
            setLocalStoredFavoriteMovies(+dataId);
        }
    });
}

export function hydrateFavoriteMoviesList() {
    const parentCardsElement = document.getElementById('favorite-movies');
    if (parentCardsElement) {
        parentCardsElement.innerHTML = '';
        const localStoragedMovies = localStorage.getItem('favoriteMovies');
        if (localStoragedMovies) {
            const storedMoviesArray: number[] = JSON.parse(localStoragedMovies);
            if (storedMoviesArray.length > 0) {
                storedMoviesArray.forEach(async (favoriteMovie) => {
                    const {
                        release_date: releaseDate,
                        overview,
                        poster_path: posterPath,
                    } = await searchFavoriteMovieDetails(favoriteMovie.toString());
                    let customizedTemplate = favoriteCardTemplate.replace('{REPLACE_RELEASE_DATE}', releaseDate);
                    customizedTemplate = customizedTemplate.replace('{REPLACE_IMG_SRC}', populateCardImg(posterPath));
                    customizedTemplate = customizedTemplate.replace(
                        '{REPLACE_DESCRIPTION}',
                        populateCardDescription(overview)
                    );
                    const cardHTML = customizedTemplate;
                    const cardElement = document.createElement('div');
                    cardElement.innerHTML = cardHTML;
                    // Agregar la tarjeta al contenedor
                    parentCardsElement.appendChild(cardElement);
                });
            }
        }
    }
}

export function refreshDOMData(data: MovieResultsResponse[]) {
    const moviesContainer = document.querySelectorAll('.card');
    let extraRandomMovieIndex = 0;
    moviesContainer.forEach((card, index) => {
        const { release_date: releaseDate, overview, poster_path: posterPath, id } = data[index];
        card.setAttribute('data-id', `${id}`);
        const movieImg = getRequiredElement<HTMLImageElement>(card, 'img');
        const movieDescription = getRequiredElement<HTMLElement>(card, '.card-text');
        const movieReleased = getRequiredElement<HTMLElement>(card, '.text-muted');
        const movieFavoriteHeart = getRequiredElement<HTMLImageElement>(card, 'svg');

        movieImg.src = populateCardImg(posterPath);
        movieDescription.innerHTML = populateCardDescription(overview);
        movieReleased.innerHTML = releaseDate;
        hydrateFavoriteHeartIcon(card, movieFavoriteHeart, id);
        extraRandomMovieIndex = index + 1;
    });
    const randomMovieCard = getRequiredElement<HTMLElement>(document, '#random-movie');
    const titleElement = getRequiredElement<HTMLElement>(randomMovieCard, 'h1');
    const overviewElement = getRequiredElement<HTMLElement>(randomMovieCard, 'p');
    titleElement.innerHTML = data[extraRandomMovieIndex].title;
    overviewElement.innerHTML = populateCardDescription(data[extraRandomMovieIndex].overview);
    randomMovieCard.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data[extraRandomMovieIndex].poster_path})`;
}

export function checkClickedInput(event: Event): boolean {
    const target = event.target as HTMLElement;
    if (target.classList.contains('lastClicked')) {
        return true;
    }
    const isLastClickedElement = document.querySelector('.lastClicked');
    if (isLastClickedElement) {
        isLastClickedElement.classList.remove('lastClicked');
    }
    target.classList.add('lastClicked');
    return false;
}
