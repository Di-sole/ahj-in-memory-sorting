/* eslint-disable no-param-reassign */
export default function buildMoviesTable(movies, containerEl) {
  containerEl.innerHTML = '';
  movies.forEach((o) => {
    const el = document.createElement('tr');
    el.innerHTML = `
      <td>${o.id}</td>
      <td>${o.title}</td>
      <td>(${o.year})</td>
      <td>imdb: ${o.imdb.toFixed(2)}</td>
    `;
    containerEl.appendChild(el);
  });
}
