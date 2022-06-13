import SimpleLightbox from 'simplelightbox';
import axios from 'axios';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('#search-form');
const galleryEl = document.querySelector('.gallery');
const btnEl = document.querySelector('.load-more');
const inputEl = document.querySelector('input');

let counter = null;
// const inputEl = document.querySelector('input');
// console.log(inputEl);

formEl.addEventListener('submit', getUserValue);
btnEl.addEventListener('click', onClickMoreImg);

function getUserValue(e) {
  e.preventDefault();
  const nameImage = e.target.elements.searchQuery.value.trim();
  if (!nameImage) {
    return;
  }
  counter = 1;

  fetchImages(nameImage)
    .then(result => {
      if (!result.total) {
        return Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      galleryEl.innerHTML = '';
      Notify.success(`Hooray! We found ${result.totalHits} images.`);
      renderCardsMarkup(result.hits);
    })
    .catch(err => console.log(err));
}

async function fetchImages(nameImage) {
   const BASE_KEY = '26673038-cabd68481316a87c43ed4c613';
   const URL = 'https://pixabay.com';

   const options = `?key=${BASE_KEY}&q=${nameImage}&image_type=photo&orientation=horizontal&safesearch=true&page=${counter}&per_page=40`;

  const dataServer = await fetch(`${URL}/api/${options}`);
  return dataServer.json();

  //  return axios.get(`/${options}`);
 }

//  function fetchImages(nameImage) {
//   const BASE_KEY = '26673038-cabd68481316a87c43ed4c613';
//   const URL = 'https://pixabay.com';

//   const options = `?key=${BASE_KEY}&q=${nameImage}&image_type=photo&orientation=horizontal&safesearch=true&page=${counter}&per_page=40`;

//   return fetch(`${URL}/api/${options}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

function renderCardsMarkup(result) {
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
          <a href="${largeImageURL}">
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

  galleryEl.insertAdjacentHTML('beforeend', markup);
}

function onClickMoreImg() {
  const value = inputEl.value;
  if (counter !== null) {
    counter += 1;
    fetchImages(value)
      .then(result => {
        renderCardsMarkup(result.hits);
      })
      .catch(err => console.log(err));
  }
}

// let Lightbox = new SimpleLightbox('.gallery .photo-card a', {
//   captionSelector: '.gallery__image',
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
//   animationSpeed: 250,
//   preloading: false,
//   docClose: false,
//   widthRatio: 1,
//   doubleTapZoom: 1.5,
//   refresh,
// });
