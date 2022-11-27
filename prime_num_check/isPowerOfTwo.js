// const isPowerOfTwo = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// };

// const result = isPowerOfTwo(5);
// const resultOne = isPowerOfTwo(2);
// const resultTwo = isPowerOfTwo(1);

// console.log(result);
// console.log(resultOne);
// console.log(resultTwo);

// isPowerOfTwo fun is big-o == 0(logn)

// in bitwise operation

const bitwiseOperation = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

let outComeOne = bitwiseOperation(5);
let outComeTwo = bitwiseOperation(2);
let outComeThree = bitwiseOperation(1);

console.log(Boolean(outComeOne));
console.log(Boolean(outComeTwo));
console.log(Boolean(outComeThree));

// big-o = o(1)
