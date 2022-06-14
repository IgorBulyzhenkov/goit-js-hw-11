import { noMorePages } from './service';
import { renderCardsMarkup } from './render-markup';
import { fetchImages } from './fetch-img';
import { page, nameImg, Lightbox } from '../index';

export async function onClickMoreImg() {
  try {
    if (page !== null) {
      page += 1;
      const userValue = await fetchImages(nameImg);
      const userData = userValue.data;
      renderCardsMarkup(userData.hits);
      noMorePages(userData);
      Lightbox.refresh();
    }
  } catch (error) {
    console.log(error.message);
  }
}
