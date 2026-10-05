// === Module 6274: ? ===

// Module 6274
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import TOUCHABLE_STATEDefault from "TOUCHABLE_STATE" /* 6273 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
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
      const tmp = _objectWithoutProperties(props, closure_2);
      TOUCHABLE_STATEDefault;
      const merged = Object.assign(tmp);
      return <tmp2 style={style} extraButtonProps={self.getExtraButtonProps()} />;
    }
  }
];
const importDefaultResultResult = _createClass(TouchableNativeFeedback, items);
let obj = { useForeground: true, extraButtonProps: { rippleColor: null } };
let merged = Object.assign(TOUCHABLE_STATEDefault.defaultProps);
importDefaultResultResult.defaultProps = obj;
importDefaultResultResult.SelectableBackground = (rippleRadius) => ({ type: "ThemeAttrAndroid", attribute: "selectableItemBackground", rippleRadius });
importDefaultResultResult.SelectableBackgroundBorderless = (rippleRadius) => ({ type: "ThemeAttrAndroid", attribute: "selectableItemBackgroundBorderless", rippleRadius });
importDefaultResultResult.Ripple = (color, borderless, rippleRadius) => ({ type: "RippleAndroid", color, borderless, rippleRadius });
importDefaultResultResult.canUseNativeForeground = () => Platform.Version >= 23;

export default importDefaultResultResult;