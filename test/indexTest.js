const assert = require('chai').assert;
const index = require('../index');
describe('Test about index file', function() {
  describe('Tests addition', function() {
    it('Tests addition functionality', function() {
    let result = index.add(5, 4)
      assert.equal(result, 9);
    });
     it('Tests addition return type', function () {
       let result = index.add(5, 4);
       assert.typeOf(result, 'number');
     });
  });
    describe('Tests subtraction', function() {
    it('Tests subtraction functionality', function() {
    let result = index.sub(5, 4)
      assert.equal(result, 1);
    }
    );
        it('Tests subtraction return type', function () {
         let result = index.sub(5, 4);
            assert.typeOf(result, 'number');

        });
    });
});