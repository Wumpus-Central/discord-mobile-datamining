// === Module 12786: ? ===

// Module 12786
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;
import emptyFunction from "module_4389" /* 4389 */;

let Link = fn;
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
let closure_2 = ["component", "to", "replace"];
const jsx = fn(21).jsx;
class Link {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_4(this, Link);
    items1 = [...items];
    tmp2 = metroRequire;
    obj = metroRequire(Link);
    tmp3 = hasOwnProperty;
    if (closure_8()) {
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
_inherits(Link, noop.Component);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    ({ component: dependencyMap, to, replace } = props);
    Link = _objectWithoutProperties(props, self);
    return jsx(Link(4392).__HistoryContext.Consumer, {
      children(arg0) {
        closure_0 = arg0;
        const obj = {};
        const merged = Object.assign(closure_0);
        obj.onPress = function onPress(arg0) {
          return self.handlePress(arg0, closure_0);
        };
        return <closure_1 />;
      }
    });
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Link, items);
importDefaultResultResult.defaultProps = { component: fn(17).TouchableHighlight, replace: false };
let obj = { onPress: emptyFunction.func, component: emptyFunction.elementType, replace: emptyFunction.bool, to: null };
let items1 = [emptyFunction.string, emptyFunction.object];
obj.to = emptyFunction.oneOfType(items1);
importDefaultResultResult.propTypes = obj;

export default importDefaultResultResult;