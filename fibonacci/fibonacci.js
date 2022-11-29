// const fibonacci = (n) => {
//   const fib = [0, 1];
//   for (i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// };

// const val = fibonacci(7);
// console.log(val);

// Big-o = o(n)

const fibrecurrsion = (n) => {
  if (n < 2) {
    return n;
  }
  return fibrecurrsion(n - 1) + fibrecurrsion(n - 2);
};

console.log(fibrecurrsion(6));
console.log(fibrecurrsion(1));
console.log(fibrecurrsion(0));
