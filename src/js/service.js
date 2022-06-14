import { getRefs } from './refs';
import { parePage, page } from '../index';

const { btnEl, textEl } = getRefs();

export function noMorePages(response) {
  const currentPage = page;
  const totalPages = Math.ceil(response.totalHits / parePage);
  if (currentPage === totalPages) {
    btnEl.classList.add('hidden');
    textInAnEnd();
  }
}

function textInAnEnd() {
  const markup = /*html*/ `
    <p>We're sorry, but you've reached the end of search results.</p>
`;
  return (textEl.innerHTML = markup);
}
