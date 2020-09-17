import data from './data';
import buildMoviesTable from './buildMoviesTable';
import changeArrow from './changeArrow';
import {
  sortById, sortByTitle, sortByYear, sortByImdb,
} from './sort';

const tableBody = document.querySelector('.table-body');
const arrows = document.querySelectorAll('.arrow');
let sortingMethod = 1;

buildMoviesTable(data, tableBody);

setInterval(() => {
  let sortedMovies;
  let index;

  switch (sortingMethod) {
    case 1:
      sortedMovies = sortById(data);
      index = 0;
      break;
    case 2:
      sortedMovies = sortById(data).reverse();
      index = 0;
      break;
    case 3:
      sortedMovies = sortByTitle(data);
      index = 1;
      break;
    case 4:
      sortedMovies = sortByTitle(data).reverse();
      index = 1;
      break;
    case 5:
      sortedMovies = sortByYear(data);
      index = 2;
      break;
    case 6:
      sortedMovies = sortByYear(data).reverse();
      index = 2;
      break;
    case 7:
      sortedMovies = sortByImdb(data);
      index = 3;
      break;
    default:
      sortedMovies = sortByImdb(data).reverse();
      index = 3;
      sortingMethod = 0;
      break;
  }

  buildMoviesTable(sortedMovies, tableBody);
  changeArrow(arrows, sortingMethod, index);
  sortingMethod++;
}, 2000);
