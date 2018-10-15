function reverseArray(Array) {
  const newArray = [];
  const a = Array.length;
  for (let i = 0; i < a; i++) {
    newArray.push(Array[a - i - 1]);
  }
  return newArray;
}
function reverseArrayInPlace(Array) {
  return reverseArray(Array);
}
console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
