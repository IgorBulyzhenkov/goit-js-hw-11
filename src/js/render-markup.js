import { getRefs } from './refs';

const { galleryEl } = getRefs();

export function renderCardsMarkup(result) {
  const markup = /*html*/ `<ul class="gallery-list">${result
    .map(
      ({
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        largeImageURL,
      }) => `
        <li class="gallery-list__item"><div class="photo-card">
          <a href="${largeImageURL}" >
            <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <ul class="info">
            <li class="info-list">
              <p class="info-text">Likes :</p>
              <span>${likes}</span>
            </li>
            <li class="info-list">
              <p class="info-text">Views :</p>
              <span>${views}</span>
            </li>
            <li class="info-list">
              <p class="info-text">Comments :</p>
              <span>${comments}</span>
            </li>
            <li class="info-list">
              <p class="info-text">Downloads :</p>
              <span>${downloads}</span>
            </li>
          </ul>
        </div></li>`
    )
    .join('')}</ul>`;

  drowMarkup(markup);
}

function drowMarkup(markup) {
  galleryEl.insertAdjacentHTML('beforeend', markup);
}
