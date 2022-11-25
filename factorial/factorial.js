const factorial = (n) => {
  let fac = 1;
  //   if (n == 0) {
  //     return fac;
  //   }
  for (i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
};

const product = factorial(0);

console.log(product);

// big-o = o(n)
