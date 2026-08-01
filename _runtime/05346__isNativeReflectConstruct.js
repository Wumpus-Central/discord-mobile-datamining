// === Module 5346: _isNativeReflectConstruct ===

// Module 5346 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import get_ActivityIndicator from "get ActivityIndicator";
import "noop";
import { jsx } from "jsxProd";

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_3 = ["style"];
({ Animated: metroImportAll, Easing: c9, StyleSheet: c10, View: unpackModuleId } = get_ActivityIndicator);
class TouchableOpacity {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.getChildStyleOpacityWithDefault = () => {
      const tmp = outer1_10.flatten(_undefined.props.style) || {};
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
      const obj = { toValue, duration, easing: outer1_9.inOut(outer1_9.quad), useNativeDriver: null };
      let flag = _undefined.props.useNativeAnimations;
      if (flag == null) {
        flag = true;
      }
      obj[3] = flag;
      outer1_8.timing(_undefined.opacity, obj).start();
    };
    tmp3Result.onStateChange = (arg0, arg1) => {
      if (arg1 === _undefined(outer1_2[9]).TOUCHABLE_STATE.BEGAN) {
        _undefined.setOpacityTo(_undefined.props.activeOpacity, 0);
      } else {
        if (!tmp3) {
          _undefined.setOpacityTo(_undefined.getChildStyleOpacityWithDefault(), 150);
        }
        tmp3 = arg1 !== tmp(tmp2[9]).TOUCHABLE_STATE.UNDETERMINED && arg1 !== tmp(tmp2[9]).TOUCHABLE_STATE.MOVED_OUTSIDE;
      }
    };
    return tmp3Result;
  }
}
require("_inherits")(TouchableOpacity, require("noop").Component);
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
    return jsx(importDefault(5344), {});
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(TouchableOpacity, items);
obj = {};
let merged = Object.assign(require("_isNativeReflectConstruct").defaultProps);
obj.activeOpacity = 0.2;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;