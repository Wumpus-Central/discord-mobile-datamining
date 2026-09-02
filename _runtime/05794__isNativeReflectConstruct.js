// _runtime/05794__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "05793__isNativeReflectConstruct.js";
import closure_3 from "metro/00109__objectWithoutProperties.js";
import closure_4 from "metro/00041__classCallCheck.js";
import closure_5 from "metro/00093__possibleConstructorReturn.js";
import closure_6 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { Platform } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_2 = ["style"];
noopAll;
class TouchableNativeFeedback {
  constructor() {
    self = this;
    tmp = closure_4(this, TouchableNativeFeedback);
    tmp2 = closure_6;
    obj = closure_6(TouchableNativeFeedback);
    tmp3 = closure_5;
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
_inheritsDefault(TouchableNativeFeedback, require("noop").Component);
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
  },
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
      return jsx(TouchableNativeFeedback(5793), {});
    },
  },
];
const importDefaultResultResult = importDefaultResult(TouchableNativeFeedback, items);
obj = {};
let merged = Object.assign(_isNativeReflectConstructDefault.defaultProps);
obj.useForeground = true;
obj.extraButtonProps = { rippleColor: null };
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
