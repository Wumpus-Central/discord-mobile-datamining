// _runtime/12786__isNativeReflectConstruct.js
import emptyFunctionDefault from "04389_emptyFunction.js";
import closure_3 from "metro/00109__objectWithoutProperties.js";
import closure_4 from "metro/00041__classCallCheck.js";
import closure_5 from "metro/00093__possibleConstructorReturn.js";
import closure_6 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00098__inherits.js";
import { jsx } from "react/00021_jsxProd.js";
import importDefaultResult2 from "00019_noop.js";

let Link = arg1;
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
let closure_2 = ["component", "to", "replace"];
class Link {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_4(this, closure_0);
    items1 = [...items];
    tmp2 = closure_6;
    obj = closure_6(closure_0);
    tmp3 = closure_5;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.handlePress = (defaultPrevented, str) => {
      if (props.props.onPress) {
        props = tmp.props;
        props.onPress(defaultPrevented);
      }
      if (!defaultPrevented.defaultPrevented) {
        const to = str.to;
        if (tmp.props.replace) {
          const replaced = str.replace(to);
        } else {
          str.push(to);
        }
      }
    };
    return tmp3Result;
  }
}
importDefaultResult1(Link, importDefaultResult2.Component);
let obj = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    ({ component: dependencyMap, to, replace } = props);
    Link = callback(props, self);
    return jsx(Link(4392).__HistoryContext.Consumer, {
      children(arg0) {
        closure_0 = arg0;
        const obj = {};
        const merged = Object.assign(closure_0);
        obj.onPress = function onPress(arg0) {
          return closure_1_2.handlePress(arg0, closure_0);
        };
        return closure_1_7(closure_1, obj);
      },
    });
  },
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(Link, items);
importDefaultResultResult.defaultProps = {
  component: require("get ActivityIndicator").TouchableHighlight,
  replace: false,
};
obj = {
  onPress: emptyFunctionDefault.func,
  component: emptyFunctionDefault.elementType,
  replace: emptyFunctionDefault.bool,
  to: null,
};
let items1 = [emptyFunctionDefault.string, emptyFunctionDefault.object];
obj[3] = emptyFunctionDefault.oneOfType(items1);
importDefaultResultResult.propTypes = obj;

export default importDefaultResultResult;
