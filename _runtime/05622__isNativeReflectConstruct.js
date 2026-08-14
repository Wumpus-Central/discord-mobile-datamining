// _runtime/05622__isNativeReflectConstruct.js
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const TouchableNativeFeedback = importDefault;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_2 = ["style"];
class TouchableNativeFeedback {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, TouchableNativeFeedback);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(TouchableNativeFeedback);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
require("_inherits")(TouchableNativeFeedback, require("noop").Component);
let obj = {
  key: "getExtraButtonProps",
  value: function getExtraButtonProps() {
    const obj = {};
    let rippleRadius = this.props.background;
    if (!rippleRadius) {
      obj.foreground = this.props.useForeground;
      return obj;
    } else {
      if ("RippleAndroid" === rippleRadius.type) {
        ({ borderless: obj.borderless, color: obj.rippleColor } = rippleRadius);
      } else if ("ThemeAttrAndroid" === rippleRadius.type) {
        obj.borderless = "selectableItemBackgroundBorderless" === rippleRadius.attribute;
      }
      rippleRadius = rippleRadius.rippleRadius;
      obj.rippleRadius = rippleRadius;
    }
  }
};
const items = [
  obj,
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let style = props.style;
      if (undefined === style) {
        style = {};
      }
      const obj = {};
      const tmp = callback(props, closure_2);
      const merged = Object.assign(tmp);
      obj.style = style;
      obj.extraButtonProps = self.getExtraButtonProps();
      return jsx(TouchableNativeFeedback(5621), {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(TouchableNativeFeedback, items);
obj = {};
let merged = Object.assign(require("_isNativeReflectConstruct").defaultProps);
obj.useForeground = true;
obj.extraButtonProps = { rippleColor: null };
importDefaultResultResult.defaultProps = obj;
importDefaultResultResult.SelectableBackground = (rippleRadius) => ({ type: "ThemeAttrAndroid", attribute: "selectableItemBackground", rippleRadius });
importDefaultResultResult.SelectableBackgroundBorderless = (rippleRadius) => ({ type: "ThemeAttrAndroid", attribute: "selectableItemBackgroundBorderless", rippleRadius });
importDefaultResultResult.Ripple = (color, borderless, rippleRadius) => ({ type: "RippleAndroid", color, borderless, rippleRadius });
importDefaultResultResult.canUseNativeForeground = () => Platform.Version >= 23;

export default importDefaultResultResult;