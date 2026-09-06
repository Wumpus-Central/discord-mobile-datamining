// === Module 6789: ? ===

// Module 6789
import _modDef6788 from "module_6788" /* 6788 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

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
  } catch (err) {
  }
}
let closure_2 = ["style"];
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;
class TouchableNativeFeedback {
  constructor() {
    self = this;
    tmp = closure_4(this, TouchableNativeFeedback);
    tmp2 = metroRequire;
    obj = metroRequire(TouchableNativeFeedback);
    tmp3 = hasOwnProperty;
    if (closure_9()) {
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
_inherits(TouchableNativeFeedback, fn(19).Component);
const entry = {
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
      const obj = {};
      const tmp = _objectWithoutProperties(props, closure_2);
      const merged = Object.assign(tmp);
      obj.style = style;
      obj.extraButtonProps = self.getExtraButtonProps();
      return jsx(TouchableNativeFeedback(6788), {});
    }
  }
];
const importDefaultResultResult = _createClass(TouchableNativeFeedback, items);
let obj = {};
let merged = Object.assign(_modDef6788.defaultProps);
obj.useForeground = true;
obj.extraButtonProps = { rippleColor: null };
importDefaultResultResult.defaultProps = obj;
importDefaultResultResult.SelectableBackground = (rippleRadius) => ({ type: "ThemeAttrAndroid", attribute: "selectableItemBackground", rippleRadius });
importDefaultResultResult.SelectableBackgroundBorderless = (rippleRadius) => ({ type: "ThemeAttrAndroid", attribute: "selectableItemBackgroundBorderless", rippleRadius });
importDefaultResultResult.Ripple = (color, borderless, rippleRadius) => ({ type: "RippleAndroid", color, borderless, rippleRadius });
importDefaultResultResult.canUseNativeForeground = () => Platform.Version >= 23;

export default importDefaultResultResult;