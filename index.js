const reverseArray = (elements) => {
  const newArray = [];
  const a = elements.length;
  for (let i = 0; i < a; i++) {
    newArray.push(elements[a - i - 1]);
  }
  return newArray;
};
const reverseArrayInPlace = (elements) => {
  const elementsCount = elements.length - 1;
  for (let i = 0; i < Math.floor(elements.length / 2); i++) {
    const a = elements[i];
    elements[i] = elements[elementsCount - i];
    elements[elementsCount - i] = a;
  }
};
console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

export { reverseArray, reverseArrayInPlace };
