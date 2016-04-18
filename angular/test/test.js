// var should = require('chai').should();
//
// describe('Array', function() {
//     describe('#indexOf()', function () {
//         it('should return -1 when the value is not present', function () {
//             [1,2,3].indexOf(5).should.equal(-1);
//             [1,2,3].indexOf(0).should.equal(-1);
//         });
//     });
// });

chai.should();

describe('Array', function() {
    describe('method indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            [1,2,3].indexOf(5).should.equal(-1);
            [1,2,3].indexOf(0).should.equal(-1);
        });
    });
});