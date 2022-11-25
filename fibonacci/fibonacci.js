const fibonacci = (n) => {
  const fib = [0, 1];
  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

const val = fibonacci(7);
console.log(val);
