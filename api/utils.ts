import { OverwriteAPIResponse } from './constants';
import { MovieResultsResponse } from './types';

function getRequiredElement<T extends Element>(parent: Element | Document, selector: string): T {
    const element = parent.querySelector<T>(selector);
    if (!element) {
        throw new Error(`Elemento no encontrado: ${selector}`);
    }
    return element;
}

export function refreshDOMData(data: MovieResultsResponse[]) {
    const moviesContainer = document.querySelectorAll('.card');
    let extraRandomMovieIndex = 0;
    moviesContainer.forEach((card, index) => {
        const { release_date: releaseDate, overview, poster_path: posterPath } = data[index];
        const movieImg = getRequiredElement<HTMLImageElement>(card, 'img');
        const movieDescription = getRequiredElement<HTMLElement>(card, '.card-text');
        const movieReleased = getRequiredElement<HTMLElement>(card, '.text-muted');

        movieImg.src = posterPath
            ? `https://image.tmdb.org/t/p/original/${posterPath}`
            : OverwriteAPIResponse.NO_POSTER_AVAILABLE;
        movieDescription.innerHTML = overview === '' ? OverwriteAPIResponse.NO_DESCRPTION_MESSAGGE : overview;
        movieReleased.innerHTML = releaseDate;
        extraRandomMovieIndex = index + 1;
    });
    const randomMovieCard = getRequiredElement<HTMLElement>(document, '#random-movie');
    const titleElement = getRequiredElement<HTMLElement>(randomMovieCard, 'h1');
    const overviewElement = getRequiredElement<HTMLElement>(randomMovieCard, 'p');
    titleElement.innerHTML = data[extraRandomMovieIndex].title;
    overviewElement.innerHTML = data[extraRandomMovieIndex].overview;
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
