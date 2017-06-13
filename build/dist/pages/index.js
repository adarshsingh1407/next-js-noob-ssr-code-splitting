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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dynamic = require('next/dist/lib/dynamic.js');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _hello = require('../components/hello2.js');

var _hello2 = _interopRequireDefault(_hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DynamicComponent = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('../components/hello');

    m = m.default || m;
    m.__webpackChunkName = '4821787e-bb5d-480c-88f4-bc732a6efbe0.js';
    resolve(m);
  }, 'chunks/4821787e-bb5d-480c-88f4-bc732a6efbe0.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('../components/hello');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule.default || weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('../components/hello');

      m = m.default || m;
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/4821787e-bb5d-480c-88f4-bc732a6efbe0.js');
}));

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(DynamicComponent, null), 'Here is my App!', _react2.default.createElement(_hello2.default, null));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;