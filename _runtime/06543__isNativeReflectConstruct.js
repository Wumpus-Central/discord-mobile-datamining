// === Module 6543: _isNativeReflectConstruct ===

// Module 6543 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6541 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "_classCallCheck" /* 41 */;
import closure_6 from "_possibleConstructorReturn" /* 93 */;
import closure_7 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const TouchableOpacity = arg1;
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
let closure_3 = ["style"];
noopAll;
({ Animated: closure_8, Easing: c9, StyleSheet: c10, View: unpackModuleId } = get_ActivityIndicator);
class TouchableOpacity {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_5(this, closure_0);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(closure_0);
    tmp3 = closure_6;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.getChildStyleOpacityWithDefault = () => {
      const tmp = closure_1_10.flatten(store.props.style) || {};
      let num = 1;
      if (null != tmp.opacity) {
        const opacity = tmp.opacity;
        num = opacity.valueOf();
      }
      return num;
    };
    value = new Animated.Value(tmp3Result.getChildStyleOpacityWithDefault());
    tmp3Result.opacity = value;
    tmp3Result.setOpacityTo = (toValue, duration) => {
      const obj = { toValue, duration, easing: closure_1_9.inOut(closure_1_9.quad), useNativeDriver: null };
      let flag = store.props.useNativeAnimations;
      if (flag == null) {
        flag = true;
      }
      obj[3] = flag;
      closure_1_8.timing(store.opacity, obj).start();
    };
    tmp3Result.onStateChange = (arg0, arg1) => {
      if (arg1 === store(closure_1_2[9]).TOUCHABLE_STATE.BEGAN) {
        store.setOpacityTo(store.props.activeOpacity, 0);
      } else {
        if (!tmp3) {
          store.setOpacityTo(store.getChildStyleOpacityWithDefault(), 150);
        }
        tmp3 = arg1 !== tmp(tmp2[9]).TOUCHABLE_STATE.UNDETERMINED && arg1 !== tmp(tmp2[9]).TOUCHABLE_STATE.MOVED_OUTSIDE;
      }
    };
    return tmp3Result;
  }
}
_inheritsDefault(TouchableOpacity, require("noop").Component);
let obj = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    let style = props.style;
    if (undefined === style) {
      style = {};
    }
    const obj = {};
    const tmp = callback(props, closure_3);
    const merged = Object.assign(tmp);
    const items = [style, { opacity: self.opacity }];
    obj.style = items;
    obj.onStateChange = self.onStateChange;
    if (self.props.children) {
      let children = self.props.children;
    } else {
      children = tmp2(closure_11, {});
    }
    obj.children = children;
    return jsx(_isNativeReflectConstructDefault, {});
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(TouchableOpacity, items);
obj = {};
let merged = Object.assign(_isNativeReflectConstructDefault.defaultProps);
obj.activeOpacity = 0.2;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;