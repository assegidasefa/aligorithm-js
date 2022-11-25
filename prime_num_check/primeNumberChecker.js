const primeNumberChecker = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const val = primeNumberChecker(9);

console.log(val);

// big-o = o(sqrt(n))
