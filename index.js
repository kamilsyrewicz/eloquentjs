function range(start, end, step = 1) {
  const array = [];
  if (start <= end) {
    for (let a = start; a <= end;) {
      array.push(a);
      a += step;
    }
  } else {
    for (let a = start; a >= end;) {
      array.push(a);
      a -= step;
    }
  }
  return array;
}

function sum(numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

const initialState = {
  a: 4,
  b: 5,
};

const spreadObject = obj => ({
  ...initialState,
  ...obj,
});

const { a: newA, b } = initialState;
console.log(initialState);

console.log(newA, b);
