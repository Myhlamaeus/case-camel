/* global it, describe */

import * as caseCamel from '../case-camel';
import assert from 'assert';

describe('case-camel', function () {
  describe('#parseSameCase()', function () {
    const tests = [
      ['T', ['T']],
      ['t', ['t']],
      ['Test', ['Test']],
      ['test', ['test']],
      ['thisIsATest', ['this', 'Is', 'A', 'Test']],
      ['ThisIsATest', ['This', 'Is', 'A', 'Test']],
      ['THISIsATest', ['THIS', 'Is', 'A', 'Test']]
    ]

    for (let [camel, parsed] of tests) {
      it(JSON.stringify(camel) + ' -> ' + JSON.stringify(parsed), function () {
        assert.deepEqual(caseCamel.parseSameCase(camel), parsed)
      })
    }
  })

  describe('#parse()', function () {
    const tests = [
      ['T', ['t']],
      ['t', ['t']],
      ['Test', ['test']],
      ['test', ['test']],
      ['thisIsATest', ['this', 'is', 'a', 'test']],
      ['ThisIsATest', ['this', 'is', 'a', 'test']],
      ['THISIsATest', ['this', 'is', 'a', 'test']]
    ]

    for (let [camel, parsed] of tests) {
      it(JSON.stringify(camel) + ' -> ' + JSON.stringify(parsed), function () {
        assert.deepEqual(caseCamel.parse(camel), parsed)
      })
    }
  })

  describe('#stringify()', function () {
    const tests = [
      ['T', ['t']],
      ['T', ['T']],
      ['Test', ['test']],
      ['Test', ['Test']],
      ['ThisIsATest', ['this', 'is', 'a', 'test']],
      ['ThisIsATest', ['This', 'Is', 'A', 'Test']],
      ['THISIsATest', ['THIS', 'is', 'a', 'test']]
    ]

    for (let [camel, parsed] of tests) {
      it(JSON.stringify(parsed) + ' -> ' + JSON.stringify(camel), function () {
        assert.equal(caseCamel.stringify(parsed), camel)
      })
    }
  })
})
