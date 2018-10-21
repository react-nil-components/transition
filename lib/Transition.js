
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _Identity = _interopRequireDefault(require("./Identity"));

var ReactWidgetTransition =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ReactWidgetTransition, _React$Component);

  function ReactWidgetTransition() {
    (0, _classCallCheck2.default)(this, ReactWidgetTransition);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ReactWidgetTransition).apply(this, arguments));
  }

  (0, _createClass2.default)(ReactWidgetTransition, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var rest = {};

      if (typeof props.children !== 'function') {
        var shouldUpdate = true;

        rest.onEnter = function () {
          shouldUpdate = false;

          if (props.onEnter) {
            props.onEnter.apply(props, arguments);
          }
        };

        rest.onEntered = function () {
          shouldUpdate = true;

          if (props.onEntered) {
            props.onEntered.apply(props, arguments);
          }
        };

        rest.onExit = function () {
          shouldUpdate = false;

          if (props.onExit) {
            props.onExit.apply(props, arguments);
          }
        };

        rest.onExited = function () {
          shouldUpdate = true;

          if (props.onExited) {
            props.onExited.apply(props, arguments);
          }
        };

        rest.children = function ()
        /*state*/
        {
          return _react.default.createElement(_Identity.default, {
            shouldUpdate: shouldUpdate
          }, props.children);
        };
      }

      return _react.default.createElement(_Transition.default, (0, _extends2.default)({}, props, rest));
    }
  }]);
  return ReactWidgetTransition;
}(_react.default.Component);

exports.default = ReactWidgetTransition;
(0, _defineProperty2.default)(ReactWidgetTransition, "propTypes", {
  onEnter: _propTypes.default.func,
  onEntered: _propTypes.default.func,
  onExit: _propTypes.default.func,
  onExited: _propTypes.default.func
});