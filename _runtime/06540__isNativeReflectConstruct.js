// _runtime/06540__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "06541__isNativeReflectConstruct.js";
import closure_4 from "metro/00109__objectWithoutProperties.js";
import closure_5 from "metro/00041__classCallCheck.js";
import closure_6 from "metro/00093__possibleConstructorReturn.js";
import closure_7 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import closure_8 from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

const TouchableHighlight = arg1;
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
({ StyleSheet: c9, View: c10 } = get_ActivityIndicator);
class TouchableHighlight {
  constructor(arg0) {
    self = this;
    tmp = closure_5(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_7;
    obj = closure_7(closure_0);
    tmp3 = closure_6;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.showUnderlay = () => {
      let obj = lib;
      if (lib.hasPressHandler()) {
        obj = { extraChildStyle: null, extraUnderlayStyle: null };
        obj = { opacity: null };
        obj[0] = obj.props.activeOpacity;
        obj[0] = obj;
        obj1 = { backgroundColor: null };
        obj1[0] = obj.props.underlayColor;
        obj[1] = obj1;
        obj.setState(obj);
        const props = obj.props;
        const onShowUnderlay = props.onShowUnderlay;
        if (onShowUnderlay != null) {
          onShowUnderlay();
        }
      }
    };
    tmp3Result.hasPressHandler = () => lib.props.onPress || lib.props.onPressIn || lib.props.onPressOut || lib.props.onLongPress;
    tmp3Result.hideUnderlay = () => {
      lib.setState({ extraChildStyle: null, extraUnderlayStyle: null });
      const props = lib.props;
      const onHideUnderlay = props.onHideUnderlay;
      if (onHideUnderlay != null) {
        onHideUnderlay();
      }
    };
    tmp3Result.onStateChange = (arg0, arg1) => {
      if (arg1 === lib(closure_1_2[9]).TOUCHABLE_STATE.BEGAN) {
        lib.showUnderlay();
      } else {
        if (!tmp3) {
          lib.hideUnderlay();
        }
        tmp3 = arg1 !== tmp(tmp2[9]).TOUCHABLE_STATE.UNDETERMINED && arg1 !== tmp(tmp2[9]).TOUCHABLE_STATE.MOVED_OUTSIDE;
      }
    };
    tmp3Result.state = { extraChildStyle: null, extraUnderlayStyle: null };
    return tmp3Result;
  }
}
_inheritsDefault(TouchableHighlight, require("noop").Component);
let obj = {
  key: "renderChildren",
  value: function renderChildren() {
    const self = this;
    if (this.props.children) {
      const Children = React.Children;
      const onlyResult = Children.only(self.props.children);
      const obj = { style: null };
      obj[0] = closure_9.compose(onlyResult.props.style, self.state.extraChildStyle);
      return React.cloneElement(onlyResult, obj);
    } else {
      return <closure_10 />;
    }
  }
};
let items = [
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
      const tmp = callback(props, closure_3);
      const merged = Object.assign(tmp);
      const items = [style, self.state.extraUnderlayStyle];
      obj.style = items;
      obj.onStateChange = self.onStateChange;
      obj.children = self.renderChildren();
      return jsx(_isNativeReflectConstructDefault, {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(TouchableHighlight, items);
obj = {};
let merged = Object.assign(_isNativeReflectConstructDefault.defaultProps);
obj.activeOpacity = 0.85;
obj.delayPressOut = 100;
obj.underlayColor = "black";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;