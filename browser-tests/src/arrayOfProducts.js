function arrayOfProducts(array) {
  // Write your code here.
  // loop through the array and grab the indices in order
  // multiply the indices and push them into a new array while they are not that index number
  // use the index numbers to find the product
  const n = array.length;
  const products = new Array(n).fill(1);
  console.log('n', n);
  console.log('products', products);
  let left = 1;
  for (let i = 0; i < n; i++) {
    products[i] *= left;
    left *= array[i];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    products[i] *= right;
    right *= array[i];
  }
  console.log('solution products', products);

  return products;
}
 export { arrayOfProducts };