
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _CSSTransition2 = _interopRequireDefault(require("react-transition-group/CSSTransition"));

var _Transition = _interopRequireDefault(require("./Transition"));

var ReactWidgetCSSTransition =
/*#__PURE__*/
function (_CSSTransition) {
  (0, _inherits2.default)(ReactWidgetCSSTransition, _CSSTransition);

  function ReactWidgetCSSTransition() {
    (0, _classCallCheck2.default)(this, ReactWidgetCSSTransition);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ReactWidgetCSSTransition).apply(this, arguments));
  }

  (0, _createClass2.default)(ReactWidgetCSSTransition, [{
    key: "render",
    value: function render() {
      var props = (0, _objectSpread2.default)({}, this.props);
      delete props.classNames;
      return React.createElement(_Transition.default, (0, _extends2.default)({}, props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    }
  }]);
  return ReactWidgetCSSTransition;
}(_CSSTransition2.default);

ReactWidgetCSSTransition.propTypes = (0, _objectSpread2.default)({}, _CSSTransition2.default.propTypes);
var _default = ReactWidgetCSSTransition;
exports.default = _default;