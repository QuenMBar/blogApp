"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomBar = /*#__PURE__*/function (_Component) {
  _inherits(CustomBar, _Component);

  var _super = _createSuper(CustomBar);

  function CustomBar() {
    var _this;

    _classCallCheck(this, CustomBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "arrayOfColors", ["#EF5350", "#EC407A", "#AB47BC", "#673AB7", "#3F51B5", "#2196F3", "#29B6F6", "#26C6DA", "#26A69A", "#66BB6A", "#9CCC65", "#D4E157", "#FFEE58", "#FFCA28", "#FFA726", "#FF8A65", "#A1887F", "#E0E0E0", "#90A4AE", "#000000", "#C62828", "#AD1457", "#6A1B9A", "#4527A0", "#283593", "#1565C0", "#0277BD", "#00838F", "#00695C", "#2E7D32", "#558B2F", "#9E9D24", "#F9A825", "#FF8F00", "#EF6C00", "#D84315", "#4E342E", "#424242", "#37474F"]);

    _defineProperty(_assertThisInitialized(_this), "containerStyles", {
      height: 20,
      width: "80%",
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      marginTop: 40,
      marginLeft: "10%",
      marginRight: "10%",
      position: "relative"
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      objArr: []
    });

    _defineProperty(_assertThisInitialized(_this), "createFillerStyle", function (percent) {
      return {
        height: 20,
        width: 20,
        marginLeft: "".concat(percent, "%"),
        backgroundColor: _this.arrayOfColors[Math.floor(Math.random() * _this.arrayOfColors.length)],
        borderRadius: "inherit",
        textAlign: "right",
        position: "absolute"
      };
    });

    _defineProperty(_assertThisInitialized(_this), "updateBarElements", function () {
      var reducedArray = []; // Loop through the percents, grabbing the correct css and making an object of the relevant data

      _this.props.percents.forEach(function (percent, i) {
        reducedArray.push({
          id: i,
          style: _this.createFillerStyle(percent)
        });
      });

      _this.setState({
        objArr: reducedArray
      });
    });

    return _this;
  }

  _createClass(CustomBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBarElements();
    }
    /** Takes in the percent along the bar it should be and returns the correct css along with a random color for the object
     */

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: this.containerStyles,
          children: this.state.objArr.map(function (obj) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: obj.style
            }, obj.id);
          })
        })
      });
    }
  }]);

  return CustomBar;
}(_react.Component);

exports.default = CustomBar;
CustomBar.defaultProps = {
  percents: [12, 23, 30, 55, 72, 80, 93]
};

//# sourceMappingURL=CustomBar.js.map