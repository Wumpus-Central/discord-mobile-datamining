// _runtime/metro/06275__.js
import react2 from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";
import TOUCHABLE_STATEDefault from "../06273_TOUCHABLE_STATE.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react_native from "../00017_react-native.js";

let timing;

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
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
let closure_3 = ["style"];
const Component = react2.Component;
({ Animated: metroImportAll, Easing: c9, StyleSheet: c10, View: unpackModuleId } = react_native);
const jsx = Fragment.jsx;
class TouchableOpacity {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, TouchableOpacity);
    const items1 = [...items];
    let obj = _getPrototypeOf(TouchableOpacity);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = metroRequire(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.getChildStyleOpacityWithDefault = () => {
      const tmp = closure_2_10.flatten(closure_0.props.style) || {};
      let num = 1;
      if (null != tmp.opacity) {
        const opacity = tmp.opacity;
        num = opacity.valueOf();
      }
      return num;
    };
    const value = new metroImportAll.Value(tmp3Result.getChildStyleOpacityWithDefault());
    tmp3Result.opacity = value;
    tmp3Result.setOpacityTo = (toValue, duration) => {
      let flag;
      timing = timing.timing;
      const opacity = closure_0.opacity;
      const obj = { toValue, duration, easing: closure_2_9.inOut(closure_2_9.quad), useNativeDriver: flag };
      flag = closure_0.props.useNativeAnimations;
      if (flag == null) {
        flag = true;
      }
      const timingResult = timing(opacity, obj);
      timingResult.start();
    };
    tmp3Result.onStateChange = (arg0, arg1) => {
      if (arg1 === TouchableOpacity(closure_2_2[9]).TOUCHABLE_STATE.BEGAN) {
        closure_0.setOpacityTo(closure_0.props.activeOpacity, 0);
      } else {
        const tmp3 =
          arg1 !== TouchableOpacity(closure_2_2[9]).TOUCHABLE_STATE.UNDETERMINED &&
          arg1 !== TouchableOpacity(closure_2_2[9]).TOUCHABLE_STATE.MOVED_OUTSIDE;
        if (!tmp3) {
          closure_0.setOpacityTo(closure_0.getChildStyleOpacityWithDefault(), 150);
        }
      }
    };
    return tmp3Result;
  }
}
_inherits(TouchableOpacity, Component);
const entry = {
  key: "render",
  value: function render() {
    let children;
    const self = this;
    const props = this.props;
    let style = props.style;
    if (undefined === style) {
      style = {};
    }
    const tmp = _objectWithoutProperties(props, closure_3);
    TOUCHABLE_STATEDefault;
    const merged = Object.assign(tmp);
    const items = [style, { opacity: self.opacity }];
    if (self.props.children) {
      children = self.props.children;
    } else {
      children = <unpackModuleId />;
    }
    return (
      <tmp3 style={items} onStateChange={self.onStateChange}>
        {children}
      </tmp3>
    );
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(TouchableOpacity, items);
let obj = { activeOpacity: 0.2 };
let merged = Object.assign(TOUCHABLE_STATEDefault.defaultProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
