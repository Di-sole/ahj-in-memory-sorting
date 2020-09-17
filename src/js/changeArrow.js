/* eslint-disable no-param-reassign */
export default function changeArrow(arr, method, index) {
  let arrow;

  if (method % 2 === 0) {
    arrow = String.fromCharCode(8595);
  } else {
    arrow = String.fromCharCode(8593);
  }

  arr.forEach((el) => {
    el.textContent = '';
  });

  arr[index].textContent = arrow;
}
