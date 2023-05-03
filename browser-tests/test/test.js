const assert = chai.assert;
import { calcProductAndSum } from './consecutive.js';
import { threeSumClosest } from './threeSumClosest.js';
import { arrayOfProducts } from './arrayOfProducts.js';

describe('calcProductAndSum', function () {
  it('should return [2, 3] for input 2', function () {
    assert.deepEqual(calcProductAndSum(2), [2, 3]);
  });

  it('should return [720, 21] for input 6', function () {
    assert.deepEqual(calcProductAndSum(6), [720, 21]);
  });

  it('should return [6227020800, 91] for input 13', function () {
    assert.deepEqual(calcProductAndSum(13), [6227020800, 91]);
  });

  it('should throw an error if input is less than 1', function () {
    assert.throw(
      () => calcProductAndSum(0),
      'Input must be a positive integer'
    );
  });

  it('should throw an error if input is greater than 15', function () {
    assert.throw(
      () => calcProductAndSum(16),
      'Input must be less than or equal to 15'
    );
  });
});

describe('#threeSumClosest', function () {
  it('should return 2 for input [-1, 2, 1, -4] and target 1', function () {
    assert.equal(threeSumClosest([-1, 2, 1, -4], 1), 2);
  });

  it('should return 0 for input [0, 0, 0] and target 1', function () {
    assert.equal(threeSumClosest([0, 0, 0], 1), 0);
  });

  it('should return 3 for input [1, 1, 1, 0] and target 100', function () {
    assert.equal(threeSumClosest([1, 1, 1, 0], 100), 3);
  });
});

describe('arrayOfProducts', function () {
  it('should return the product of all the numbers in the array except the number at the index [5, 1, 2, 4] with output [8, 40, 10, 29]', function () {
    assert.deepEqual(arrayOfProducts([5, 1, 4, 2]), [8, 40, 10, 20]);
  } );

  it('should return the product of all the numbers in the array except the number at the index [1, 8, 6, 2, 4]), [384, 48, 64, 192, 96]', function () {
    assert.deepEqual(arrayOfProducts([1, 8, 6, 2, 4]), [384, 48, 64, 192, 96]);
  });

  it('should return the product of all the numbers in the array except the number at the index [-5, 2, -4, 14, -6] with output[672, -1680, 840, -240, 560]',
      function () {
    assert.deepEqual(
      arrayOfProducts([-5, 2, -4, 14, -6]),
      [672, -1680, 840, -240, 560]
    );
  });

  it('should return the product of all the numbers in the array except the number at the index [5, 1, 2, 4] with output [8, 40, 10, 29]', function () {
    assert.deepEqual(arrayOfProducts([5, 1, 4, 2]), [8, 40, 10, 20]);
  });
  it('should return the product of all the numbers in the array except the number at the index [1, 8, 6, 2, 4]), [384, 48, 64, 192, 96]', function () {
    assert.deepEqual(arrayOfProducts([1, 8, 6, 2, 4]), [384, 48, 64, 192, 96]);
  } );
  it('should return the product [4, 4] with output [4, 4]', function () { 
    assert.deepEqual(arrayOfProducts([4, 4]), [4, 4]);
  });
  it('should return the product [0, 0, 0, 0] with output [0, 0, 0, 0]', function () {   
    assert.deepEqual(arrayOfProducts([0, 0, 0, 0]), [0, 0, 0, 0]);
  } );
  it('should return the product [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] with output [3628800, 1814400, 1209600, 907200, 725760, 604800, 518400, 453600, 403200, 362880]', function () { 
    assert.deepEqual(
      arrayOfProducts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      [3628800, 1814400, 1209600, 907200, 725760, 604800, 518400, 453600, 403200, 362880]
    );
  } );
  it('should return the product [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] with output [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ', function () {
    assert.deepEqual(
      arrayOfProducts([0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );
  } );
 });
mocha.run();
