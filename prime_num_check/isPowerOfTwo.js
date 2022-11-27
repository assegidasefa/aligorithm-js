const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const result = isPowerOfTwo(5);
const resultOne = isPowerOfTwo(2);
const resultTwo = isPowerOfTwo(1);

console.log(result);
console.log(resultOne);
console.log(resultTwo);
