function calcProductAndSum(n) {
  if (n < 1) {
    throw new Error('Input must be a positive integer');
  }
  if (n > 15) {
    throw new Error('Input must be less than or equal to 15');
  }
  let product = 1;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    product *= i;
    sum += i;
  }
  return [product, sum];
}

export { calcProductAndSum };
// Path: <b</brow>ser-tests/src/concat.js

//
//const N = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

//console.log(N.toString().split('').pop());

//browser-sync src test -f="src, test" -b "google chrome" --index "test.html"
