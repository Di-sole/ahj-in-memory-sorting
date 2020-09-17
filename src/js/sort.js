export function sortById(movies) {
  return movies.sort((a, b) => (a.id > b.id ? 1 : -1));
}

export function sortByTitle(movies) {
  return movies.sort((a, b) => (a.title > b.title ? 1 : -1));
}

export function sortByYear(movies) {
  return movies.sort((a, b) => (a.year > b.year ? 1 : -1));
}

export function sortByImdb(movies) {
  return movies.sort((a, b) => (a.imdb > b.imdb ? 1 : -1));
}
