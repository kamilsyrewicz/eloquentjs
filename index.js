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

