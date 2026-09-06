// _runtime/metro/06790__.js
import _modDef6788 from "06788__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const TouchableOpacity = fn;
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
let closure_3 = ["style"];
get_ActivityIndicator = fn(17);
({ Animated: closure_8, Easing: closure_9, StyleSheet: c10, View: closure_11 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
class TouchableOpacity {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = hasOwnProperty(this, TouchableOpacity);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(TouchableOpacity);
    tmp3 = metroRequire;
    if (closure_13()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
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
    value = new closure_8.Value(tmp3Result.getChildStyleOpacityWithDefault());
    tmp3Result.opacity = value;
    tmp3Result.setOpacityTo = (toValue, duration) => {
      const obj = { toValue, duration, easing: React7.inOut(React7.quad), useNativeDriver: null };
      let flag = closure_0.props.useNativeAnimations;
      if (flag == null) {
        flag = true;
      }
      obj.useNativeDriver = flag;
      React6.timing(closure_0.opacity, obj).start();
    };
    tmp3Result.onStateChange = (arg0, arg1) => {
      if (arg1 === TouchableOpacity(6788).TOUCHABLE_STATE.BEGAN) {
        closure_0.setOpacityTo(closure_0.props.activeOpacity, 0);
      } else {
        if (!tmp3) {
          closure_0.setOpacityTo(closure_0.getChildStyleOpacityWithDefault(), 150);
        }
        tmp3 = arg1 !== tmp(6788).TOUCHABLE_STATE.UNDETERMINED && arg1 !== tmp(6788).TOUCHABLE_STATE.MOVED_OUTSIDE;
      }
    };
    return tmp3Result;
  }
}
_inherits(TouchableOpacity, fn(19).Component);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    let style = props.style;
    if (undefined === style) {
      style = {};
    }
    const obj = {};
    const tmp = _objectWithoutProperties(props, closure_3);
    const merged = Object.assign(tmp);
    const items = [style, { opacity: self.opacity }];
    obj.style = items;
    obj.onStateChange = self.onStateChange;
    if (self.props.children) {
      let children = self.props.children;
    } else {
      children = tmp2(closure_1_11, {});
    }
    obj.children = children;
    return jsx(_modDef6788, {});
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(TouchableOpacity, items);
let obj = {};
let merged = Object.assign(_modDef6788.defaultProps);
obj.activeOpacity = 0.2;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
