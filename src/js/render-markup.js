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
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${likes}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${views}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${downloads}
            </p>
          </div>
        </div></li>`
    )
    .join('')}</ul>`;

  drowMarkup(markup);
}

function drowMarkup(markup) {
  galleryEl.insertAdjacentHTML('beforeend', markup);
}
