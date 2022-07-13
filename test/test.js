var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('should fail if we expect it to return 0', function () {
        assert.equal([1, 2, 3].indexOf(4), 0);
    });
  });
});