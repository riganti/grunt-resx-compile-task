'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.resx_compile_task = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  case1: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/MyResources.cs');
    var expected = grunt.file.read('test/expected/MyResources.cs');
    test.equal(actual, expected, 'The output generated during the test is not correct!');

    test.done();
  },
};
