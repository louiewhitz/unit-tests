const assert = chai.assert;
import { calcProductAndSum } from './consecutive.js';

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

describe('#testInReverse', function () {});
mocha.run();
