function reverseArray(elements) {
  const newArray = [];
  const a = elements.length;
  for (let i = 0; i < a; i++) {
    newArray.push(elements[a - i - 1]);
  }
  return newArray;
}
function reverseArrayInPlace(elements) {
  return reverseArray(elements);
}
console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
