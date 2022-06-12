const BASE_KEY = "26673038-cabd68481316a87c43ed4c613";
const url = 'https://pixabay.com';
const options = `?key=2${BASE_KEY}&q=${url}&image_type=photo&orientation=horizontal&safesearch=true`;

const formEl = document.querySelector('#search-form');
// const inputEl = document.querySelector('input');
// console.log(inputEl);


formEl.addEventListener('submit', fetchImages);


function fetchImages(e) {
    e.preventDefault();
    console.log(e.target.elements.searchQuery.value);
    const text = e.target.elements.searchQuery.value;
    console.log(text);
}
// https://pixabay.com/api/?key=26673038-cabd68481316a87c43ed4c613&q=yellow+flowers&image_type=photo

//  const fetchCountries = country => {
//   return fetch(`${BASE_URL}/v3.1/translation/${country}${options}`).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }

//       return response.json();
//     }
//   );
// };