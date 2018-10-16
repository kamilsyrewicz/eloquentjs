function arrayToList(elements) {
  let object = null;
  for (let i = elements.length - 1; i >= 0; i--) {
    object = { value: elements[i], rest: object };
  }
  return object;
}
// /////////////////////////////////////////////// //
function listToArray(elements) {
  const array = [];
  let a = elements;
  while (a.rest != undefined) {
    array.push(a.value);
    a = a.rest;
  }
  return array;
}
// /////////////////////////////////////////////// //
function prepend(position, list) {
  list = { value: position, rest: list };
  return list;
}
// /////////////////////////////////////////////// //
function nth(elements, position) {
  const array = [];
  let a = elements;
  while (a.rest != undefined) {
    array.push(a.value);
    a = a.rest;
  }
  return array[position];
}
