const range = (start, end, step = 1) => {
  const array = [];
  if (start <= end) {
    for (let a = start; a <= end; a += step) {
      array.push(a);
    }
  } else {
    for (let a = start; a >= end; a -= Math.abs(step)) {
      array.push(a);
    }
  }
  return array;
};

const sum = (numbers) => {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
};

export { range, sum };
