// _runtime/10886__isNativeReflectConstruct.js
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult1 from "_inherits";
import { jsx } from "jsxProd";
import importDefaultResult2 from "noop";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_2 = ["component", "to", "replace"];
class Link {
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
    tmp3Result.handlePress = (defaultPrevented, str) => {
      if (_undefined.props.onPress) {
        const props = tmp.props;
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
importDefaultResult1(Link, require("noop").Component);
let obj = {
  key: "render",
  value: function render() {
    let dependencyMap;
    let replace;
    let to;
    const self = this;
    const props = this.props;
    ({ component: dependencyMap, to, replace } = props);
    const Link = callback(props, self);
    return jsx(Link(4112).__HistoryContext.Consumer, {
      children(arg0) {
        let closure_0 = arg0;
        const obj = {};
        const merged = Object.assign(closure_0);
        obj.onPress = function onPress(arg0) {
          return outer1_2.handlePress(arg0, closure_0);
        };
        return outer1_7(closure_1, obj);
      }
    });
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(Link, items);
importDefaultResultResult.defaultProps = { component: require("get ActivityIndicator").TouchableHighlight, replace: false };
obj = { onPress: require("emptyFunction").func, component: require("emptyFunction").elementType, replace: require("emptyFunction").bool, to: null };
let items1 = [require("emptyFunction").string, require("emptyFunction").object];
obj[3] = require("emptyFunction").oneOfType(items1);
importDefaultResultResult.propTypes = obj;

export default importDefaultResultResult;