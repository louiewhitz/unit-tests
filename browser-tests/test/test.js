const assert = chai.assert;
import { calcProductAndSum } from './consecutive.js';
import { threeSumClosest } from './threeSumClosest.js';

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
mocha.run();
