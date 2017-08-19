'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _mobxReactForm = require('mobx-react-form');

var _mobxReactForm2 = _interopRequireDefault(_mobxReactForm);

var _validatorjs = require('validatorjs');

var _validatorjs2 = _interopRequireDefault(_validatorjs);

var _dvr = require('./dvr');

var _dvr2 = _interopRequireDefault(_dvr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFormClass = function getFormClass(_ref) {
    var rules = _ref.rules,
        asyncRules = _ref.asyncRules,
        _onSuccess = _ref.onSuccess,
        _onError = _ref.onError;

    // 一个VanexForm实例对应着一个Form校验
    var VanexForm = function (_MobxReactForm) {
        (0, _inherits3.default)(VanexForm, _MobxReactForm);

        function VanexForm() {
            (0, _classCallCheck3.default)(this, VanexForm);
            return (0, _possibleConstructorReturn3.default)(this, (VanexForm.__proto__ || (0, _getPrototypeOf2.default)(VanexForm)).apply(this, arguments));
        }

        (0, _createClass3.default)(VanexForm, [{
            key: 'plugins',
            value: function plugins() {
                return {
                    dvr: {
                        package: _validatorjs2.default,
                        extend: (0, _dvr2.default)({
                            rules: rules,
                            asyncRules: asyncRules
                        })
                    }
                };
            }
        }, {
            key: 'onSuccess',
            value: function onSuccess(form) {
                return _onSuccess(form);
            }
        }, {
            key: 'onError',
            value: function onError(form) {
                return _onError(form);
            }
        }]);
        return VanexForm;
    }(_mobxReactForm2.default);

    return VanexForm;
};

exports.default = function () {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return {
        form: function form(context) {
            if (!Array.isArray(args)) {
                args = [args];
            }

            var form = args.reduce(function (res, item) {
                var _item$name = item.name,
                    name = _item$name === undefined ? 'form' : _item$name,
                    fields = item.fields,
                    _item$rules = item.rules,
                    rules = _item$rules === undefined ? {} : _item$rules,
                    _item$asyncRules = item.asyncRules,
                    asyncRules = _item$asyncRules === undefined ? {} : _item$asyncRules,
                    _item$onSuccess = item.onSuccess,
                    onSuccess = _item$onSuccess === undefined ? function (form) {} : _item$onSuccess,
                    _item$onError = item.onError,
                    onError = _item$onError === undefined ? function (form) {} : _item$onError;


                var newOnSuccess = function newOnSuccess(form) {
                    return onSuccess(form, context);
                };

                var newOnError = function newOnError(form) {
                    return onError(form, context);
                };

                res[name] = new (getFormClass({
                    name: name,
                    rules: rules,
                    asyncRules: asyncRules,
                    onSuccess: newOnSuccess,
                    onError: newOnError
                }))({
                    fields: fields
                }, {
                    name: name
                });

                return res;
            }, {});

            return form;
        }
    };
};

module.exports = exports['default'];