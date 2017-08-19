"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var rules = _ref.rules,
        asyncRules = _ref.asyncRules;
    return function ($validator) {
        // register async rules
        (0, _keys2.default)(asyncRules).forEach(function (key) {
            return $validator.registerAsyncRule(key, asyncRules[key]);
        });

        // register sync rules
        (0, _keys2.default)(rules).forEach(function (key) {
            return $validator.register(key, rules[key].function, rules[key].message);
        });
    };
};

module.exports = exports["default"];