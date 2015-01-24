var caseCamel = require("../case-camel"),
    assert = require("assert");

describe("case-camel", function() {
    describe("#parseSameCase()", function() {
        var tests = [
            ["T", ["T"]],
            ["t", ["t"]],
            ["Test", ["Test"]],
            ["test", ["test"]],
            ["thisIsATest", ["this", "Is", "A", "Test"]],
            ["ThisIsATest", ["This", "Is", "A", "Test"]],
            ["THISIsATest", ["THIS", "Is", "A", "Test"]]
        ];

        tests.forEach(function(pair) {
            var camel = pair[0],
                parsed = pair[1];

            it(JSON.stringify(camel) + " -> " + JSON.stringify(parsed), function() {
                assert.deepEqual(caseCamel.parseSameCase(camel), parsed);
            });
        });
    });

    describe("#parse()", function() {
        var tests = [
            ["T", ["t"]],
            ["t", ["t"]],
            ["Test", ["test"]],
            ["test", ["test"]],
            ["thisIsATest", ["this", "is", "a", "test"]],
            ["ThisIsATest", ["this", "is", "a", "test"]],
            ["THISIsATest", ["this", "is", "a", "test"]]
        ];

        tests.forEach(function(pair) {
            var camel = pair[0],
                parsed = pair[1];

            it(JSON.stringify(camel) + " -> " + JSON.stringify(parsed), function() {
                assert.deepEqual(caseCamel.parse(camel), parsed);
            });
        });
    });

    describe("#stringify()", function() {
        var tests = [
            ["T", ["t"]],
            ["T", ["T"]],
            ["Test", ["test"]],
            ["Test", ["Test"]],
            ["ThisIsATest", ["this", "is", "a", "test"]],
            ["ThisIsATest", ["This", "Is", "A", "Test"]],
            ["THISIsATest", ["THIS", "is", "a", "test"]]
        ];

        tests.forEach(function(pair) {
            var camel = pair[0],
                parsed = pair[1];

            it(JSON.stringify(parsed) + " -> " + JSON.stringify(camel), function() {
                assert.equal(caseCamel.stringify(parsed), camel);
            });
        });
    });
});
