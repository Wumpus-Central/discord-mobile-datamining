// _runtime/metro/06274__.js
import react_native from "../00017_react-native.js";
import react2 from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";
import TOUCHABLE_STATEDefault from "../06273_TOUCHABLE_STATE.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import hasOwnProperty from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_2 = ["style"];
const Component = react2.Component;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
class TouchableNativeFeedback {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, TouchableNativeFeedback);
    const obj = _getPrototypeOf(TouchableNativeFeedback);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return hasOwnProperty(self, constructResult);
  }
}
_inherits(TouchableNativeFeedback, Component);
const entry = {
  key: "getExtraButtonProps",
  value: function getExtraButtonProps() {
    const obj = { foreground: this.props.useForeground };
    const background = this.props.background;
    if (background) {
      if ("RippleAndroid" === background.type) {
        ({ borderless: obj.borderless, color: obj.rippleColor } = background);
      } else if ("ThemeAttrAndroid" === background.type) {
        obj.borderless = "selectableItemBackgroundBorderless" === background.attribute;
      }
      obj.rippleRadius = background.rippleRadius;
    }
    return obj;
  },
};
const items = [
  entry,
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let style = props.style;
      if (undefined === style) {
        style = {};
      }
      const tmp = _objectWithoutProperties(props, closure_2);
      TOUCHABLE_STATEDefault;
      const merged = Object.assign(tmp);
      return <tmp2 style={style} extraButtonProps={self.getExtraButtonProps()} />;
    },
  },
];
const importDefaultResultResult = _createClass(TouchableNativeFeedback, items);
let obj = { useForeground: true, extraButtonProps: { rippleColor: null } };
let merged = Object.assign(TOUCHABLE_STATEDefault.defaultProps);
importDefaultResultResult.defaultProps = obj;
importDefaultResultResult.SelectableBackground = (rippleRadius) => ({
  type: "ThemeAttrAndroid",
  attribute: "selectableItemBackground",
  rippleRadius,
});
importDefaultResultResult.SelectableBackgroundBorderless = (rippleRadius) => ({
  type: "ThemeAttrAndroid",
  attribute: "selectableItemBackgroundBorderless",
  rippleRadius,
});
importDefaultResultResult.Ripple = (color, borderless, rippleRadius) => ({
  type: "RippleAndroid",
  color,
  borderless,
  rippleRadius,
});
importDefaultResultResult.canUseNativeForeground = () => Platform.Version >= 23;

export default importDefaultResultResult;
