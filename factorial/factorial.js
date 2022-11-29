// const factorial = (n) => {
//   let fac = 1;
//   for (i = 1; i <= n; i++) {
//     fac *= i;
//   }
//   return fac;
// };

// const product = factorial(0);

// console.log(product);

// big-o = o(n)

const recurssiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * recurssiveFactorial(n - 1);
};

console.log(recurssiveFactorial(5));
console.log(recurssiveFactorial(0));
console.log(recurssiveFactorial(1));
