// _runtime/06620__isNativeReflectConstruct.js
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6610 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import closure_5 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const FeDropShadow = importDefault;
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
({ jsx: closure_6, jsxs: error } = jsxProd);
class FeDropShadow {
  constructor() {
    self = this;
    tmp = closure_2(this, FeDropShadow);
    tmp2 = closure_4;
    obj = closure_4(FeDropShadow);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
_inheritsDefault(FeDropShadow, _isNativeReflectConstructDefault);
let obj = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const _in = props.in;
    let str = "SourceGraphic";
    if (undefined !== _in) {
      str = _in;
    }
    let obj = { children: null };
    ({ dx, dy, result } = props);
    const items = [callback3(FeDropShadow(6621), { in: str, stdDeviation: props.stdDeviation }), callback3(FeDropShadow(6623), { dx, dy, result: "offsetblur" }), , , ];
    obj = { floodColor: self.props.floodColor, floodOpacity: self.props.floodOpacity };
    items[2] = callback3(FeDropShadow(6625), obj);
    items[3] = callback3(FeDropShadow(6614), { in2: "offsetblur", operator: "in" });
    obj = { result, children: null };
    const items1 = [callback3(FeDropShadow(6629), {}), callback3(FeDropShadow(6629), { in: str })];
    obj[1] = items1;
    items[4] = callback4(FeDropShadow(6627), obj);
    obj[0] = items;
    return callback4(React.Fragment, obj);
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(FeDropShadow, items);
importDefaultResultResult.displayName = "FeDropShadow";
obj = {};
const merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;